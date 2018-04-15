import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';

import {AngularFireModule} from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {MainClicksComponent} from './main-clicks/main-clicks.component';
import {ResourcesService} from './service/resourses.service';
import {AuthenticationService} from './service/authentication.service';
import {LoginComponent} from './login/login.component';
import {DatabaseStoreService} from './service/database-store.service';
import {MaterializeModule} from 'angular2-materialize';
import {BuildingService} from './service/building.service';

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
    MainClicksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [ResourcesService,
    AuthenticationService,
    DatabaseStoreService,
    BuildingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
