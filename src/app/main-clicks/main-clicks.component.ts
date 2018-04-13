import { Component, OnInit } from '@angular/core';
import {ResourcesService} from '../service/resourses.service';
import {Resources} from '../class/resourse';

@Component({
  selector: 'app-main-clicks',
  templateUrl: './main-clicks.component.html',
  styleUrls: ['./main-clicks.component.css']
})
export class MainClicksComponent implements OnInit {

  public resource: Resources;

   constructor(private resourseCalls: ResourcesService) {
      this.resource = this.resourseCalls.resource;
  }

  ngOnInit() {
  }

  addBamboo() {
    this.resourseCalls.addFood();
    this.resourseCalls.addWood();
    console.log('Works');
  }
}
