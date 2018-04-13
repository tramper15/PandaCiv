import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HeroesComponent } from './heroes/heroes.component';
import { MainClicksComponent } from './main-clicks/main-clicks.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAwtzK6MyXY2NhE7bf4_cEYscGjSQHANi4',
  authDomain: 'pandaciv-bd0a2.firebaseapp.com',
  databaseURL: 'https://pandaciv-bd0a2.firebaseio.com',
  projectId: 'pandaciv-bd0a2',
  storageBucket: 'pandaciv-bd0a2.appspot.com',
  messagingSenderId: '1053069315286'
};

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MainClicksComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
