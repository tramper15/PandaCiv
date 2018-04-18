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
    this.resourseCalls.getResource().subscribe(resource => this.resource = resource);
    this.buildingCalls.getBuildings().subscribe(buildings => this.buildings = buildings);
    this.buildingCalls.getHasBuildings().subscribe(hasBuildings => this.hasBuildings = hasBuildings);
  }

  addBamboo() {
    this.resourseCalls.addFood();
    this.resourseCalls.addWood();
    this.buildingCalls.updateUsage(this.resource);
    this.buildingCalls.getHasBuildings().subscribe(hasBuildings => this.hasBuildings = hasBuildings);
  }

  buyBuilding(building: Building) {
     this.buildingCalls.buyBuilding(building);
     this.buildingCalls.updateUsage(this.resource);
  }

  assignPandaToBuilding(building: Building) {
    this.buildingCalls.assignPandaToBuilding(building);
    this.buildingCalls.updateUsage(this.resource);
  }
  save() {
    this.database.updateResrouse(this.resource);
    this.resourseCalls.getResource().subscribe(resource => this.resource = resource);
  }
}
