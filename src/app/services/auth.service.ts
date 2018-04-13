import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {


  user: Observable<firebase.User>;
  userDetails: firebase.User;
  constructor(public af: AngularFireAuth) {
    this.af.authState.subscribe(
      (auth) => {
        if (auth) {
          this.user = af.authState;
          this.userDetails.displayName = auth.displayName;
        }
      }
    );
  }

  login() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.af.auth.signOut();
  }
}
