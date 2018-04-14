import { Component, OnInit } from '@angular/core';
import {ResourcesService} from '../service/resourses.service';
import {Resources} from '../class/resourse';
import {DatabaseStoreService} from '../service/database-store.service';

@Component({
  selector: 'app-main-clicks',
  templateUrl: './main-clicks.component.html',
  styleUrls: ['./main-clicks.component.css']
})
export class MainClicksComponent implements OnInit {
  public resource: Resources;

   constructor(private resourseCalls: ResourcesService, private database: DatabaseStoreService) {
  }

  ngOnInit() {
    this.resourseCalls.setItems();
    this.resource = this.resourseCalls.resource;
  }

  addBamboo() {
    this.resourseCalls.addFood();
    this.resourseCalls.addWood();
    this.resource = this.resourseCalls.resource;
  }

  save() {
    this.database.updateResrouse(this.resource);
  }
}
