import { Component, OnInit } from '@angular/core';
import {Recourse} from '../core/recourse';

@Component({
  selector: 'app-main-clicks',
  templateUrl: './main-clicks.component.html',
  styleUrls: ['./main-clicks.component.css']
})
export class MainClicksComponent implements OnInit {

  recourse: Recourse;

  constructor() {
    this.recourse = new Recourse();
  }

  ngOnInit() {
  }

  addBamboo() {
     this.recourse.addFood();
    this.recourse.addWood();
  }
}
