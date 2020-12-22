import   firebase          from 'firebase/app'
import { Observable      } from 'rxjs'
import { Injectable      } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { SharedOptions   } from '@helpers/shared-options'

@Injectable()
export class IdentityService {
  // ======================================= //
  private _user: firebase.User;
  private _credential: firebase.auth.UserCredential;
  public auth$: Observable<firebase.User>;
  // ======================================= //
  constructor(private options: SharedOptions, private fireAuth: AngularFireAuth) {
    this.auth$ = this.fireAuth.authState;
    this.auth$.subscribe({
      next: (result: firebase.User) => this._user = result
    });
  }
  // ======================================= //
  get isAuthenticated(): boolean {
    return this.auth$ != null;
  }
  get currentUser(): Promise<firebase.User> {
    return this.fireAuth.currentUser;
  }
  get currentUserId(): Promise<string> {
    return Promise
      .resolve(this.fireAuth.currentUser)
      .then(result => result.uid);
  }
  get currentUserName(): Promise<string> {
    return Promise
      .resolve(this.fireAuth.currentUser)
      .then(result => result.displayName);
  }
  // ======================================= //
  public async login() {
    const provider = new firebase.auth.GithubAuthProvider();
    this._credential = await this.fireAuth.signInWithPopup(provider);
  }
  public async logout() {
    return await this.fireAuth.signOut();
  }

}