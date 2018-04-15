import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {ResourcesService} from './resourses.service';

@Injectable()
export class AuthenticationService {

  user: Observable<firebase.User>;
  userName: string;
  loggedIn: boolean;
  constructor(public af: AngularFireAuth, private rs: ResourcesService) {
    this.af.authState.subscribe(
      (auth) => {
        if (auth) {
          this.user = af.authState;
          this.userName = auth.displayName;
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }
    );
  }

  login() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.rs.setItem();
  }

  logout() {
    this.af.auth.signOut();
    this.userName = 'logged Out';
    this.user = null;
  }
}
