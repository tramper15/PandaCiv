import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loggedIn: boolean;
  // public collapsibleElem: any;
  // public collapsibleInstance: any;

  constructor(private authService: AuthenticationService) {
    this.loggedIn = false;
  }

  ngOnInit() {
    // collapsibleElem = document.querySelector('.sidenav');
    // collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  }

  login() {
    this.authService.login();
    this.loggedIn = true;
  }
  logout() {
    this.authService.logout();
    this.loggedIn = false;
  }

}
