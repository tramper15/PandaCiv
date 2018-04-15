import { Component, OnInit } from '@angular/core';

import {Resources} from '../class/resourse';
import {Building} from '../class/building';

import {ResourcesService} from '../service/resourses.service';
import {DatabaseStoreService} from '../service/database-store.service';
import {BuildingService} from '../service/building.service';

@Component({
  selector: 'app-main-clicks',
  templateUrl: './main-clicks.component.html',
  styleUrls: ['./main-clicks.component.css']
})
export class MainClicksComponent implements OnInit {
  public resource: Resources;
  public buildings: Building[];
  public hasBuildings: boolean;

   constructor(private resourseCalls: ResourcesService
               , private database: DatabaseStoreService
              , private  buildingCalls: BuildingService
   ) {
  }

  ngOnInit() {
    this.resource = this.resourseCalls.resource;
    this.buildings = this.buildingCalls.buildings;
    this.hasBuildings = this.buildingCalls.hasBuildings;
  }

  addBamboo() {
    this.resourseCalls.addFood();
    this.resourseCalls.addWood();
    this.resource = this.resourseCalls.resource;
  }

  buyBuilding(building: Building) {
     this.buildingCalls.buyBuilding(building);
  }

  save() {
    this.database.updateResrouse(this.resource);
  }
}
