import firebase from 'firebase/app'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { SharedOptions } from '@helpers/shared-options'
import { MessageService } from '@services/message.service'

@Injectable()
export class IdentityService {
  public user$: Observable<User>;
  // ======================================= //
  constructor(private options: SharedOptions, private fireAuth: AngularFireAuth, private message: MessageService) {
    this.user$ = this.fireAuth.authState;
  }
  // ======================================= //
  public async login() {
    const provider = new firebase.auth.GithubAuthProvider();
    const credential = await this.fireAuth.signInWithPopup(provider);
  }
  public async logout() {
    this.fireAuth.signOut();
  }
}
export interface User extends firebase.User { }