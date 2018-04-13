import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  show: string;
  user: Observable<firebase.User>;
  userName: string;
  constructor(public af: AngularFireAuth) {
    this.af.authState.subscribe(
      (auth) => {
        if (auth) {
          this.user = af.authState;
          this.userName = auth.displayName;
        }
      }
    );
  }
  ngOnInit() {
  }

  login() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.af.auth.signOut();
    this.userName = 'logged Out';
    this.user = null;
  }
}
