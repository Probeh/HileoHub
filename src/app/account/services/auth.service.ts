import   firebase                      from 'firebase/app'
import { Observable      }             from 'rxjs'
import { tap             }             from 'rxjs/operators'
import { IUserAccount    }             from '@account/models/account'
import { EventEmitter   , Injectable } from '@angular/core'
import { AngularFireAuth }             from '@angular/fire/auth'
import { Router          }             from '@angular/router'
import { GithubService   }             from '@github/services/github.service'
import { IKeyValue       }             from '@helpers/key-value.interface'
import { IUserProfile    }             from '@profile/models/profile'

@Injectable({ providedIn: 'root' })
export class AuthService {
  // ======================================= //
  // Firebase Authentication:
  // ======================================= //
  private _user_account: IUserAccount = {};
  private _fireUser: firebase.User;
  private _fireConfig: firebase.auth.UserCredential;
  // ======================================= //
  public $fireResult: Observable<firebase.User>;
  // ======================================= //
  // Application Authentication:
  // ======================================= //
  public isAuthenticated: boolean;
  public authChanged: EventEmitter<IKeyValue<boolean, IUserProfile>> = new EventEmitter();
  // ======================================= //
  constructor(private fireAuth: AngularFireAuth, private github: GithubService, private router: Router) {
    this.$fireResult = this.fireAuth.authState;
    this.authChanged.subscribe((result: IKeyValue<boolean, IUserProfile>) => this.onAuthChanged(result));
    this.authListener().toPromise();
  }
  // ======================================= //
  public getAuthState() {
    if (localStorage.getItem('account')) {
      this._user_account = JSON.parse(localStorage.getItem('account'));
      this.authChanged.emit({ key: true, val: this._user_account });
    }
  }
  public authListener(): Observable<firebase.User> {
    this.getAuthState();
    return this.$fireResult
      .pipe(
        tap(async (result: firebase.User) => {
          if (result) {
            this._fireUser = result;
            if (!this.isAuthenticated) {
              if (result.providerData[0].providerId.includes('github')) {
                this.github.initializeUser(result.displayName, result.email, result.photoURL)
                  .then((profile: IUserProfile) => {
                    this._user_account = {
                      email: result.email,
                      name: result.displayName,
                      username: result.email,
                      login: profile.references.github.login
                    };
                    localStorage.setItem('account', JSON.stringify(this._user_account)); /* <= Must execute before updating profile */
                    this._user_account.profile = profile; /* <= Must execute after updating storage */
                    this.authChanged.emit({ key: true, val: this._user_account });
                  });
              }
            }
          }
        }));
  }
  private onAuthChanged(result: IKeyValue<boolean, IUserProfile>) {
    if (result.key != this.isAuthenticated) {
      this.isAuthenticated = result.key;
      this.router.navigate([result.key ? 'profile' : 'home']);
    }
  }
  public getCurrentUser(): IUserProfile {
    return this._user_account.profile;
  }
  public async githubLogin() {
    return new Promise(async (resolve, reject) => {
      const provider = new firebase.auth.GithubAuthProvider();
      this._fireConfig = await this.fireAuth.signInWithPopup(provider);
      resolve(this._fireConfig.user.displayName)
    })
  }
  public async githubLogout() {
    return await this.fireAuth.signOut().then(() => this.authChanged.emit({ key: false, val: null }));
  }
}
