import { Injectable } from '@angular/core';
import {Building} from '../class/building';
import {Resources} from '../class/resourse';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {ResourcesService} from './resourses.service';

@Injectable()
export class BuildingService {
  public buildings: Building[];

  constructor(private callResourse: ResourcesService) {
      this.buildings = [];
      let building = {
        name: 'Cave',
        canBuy: false,
        isBought: false,
        assignedPandas: 0,
        woodNeeded: 10,
        foodNeeded: 10,
        canAssignPandas: false,
        resourceType: 'Panda',
        perTick: 1,
        pandasAccepted: false
      } as Building;
      this.buildings.push(building);
      building = {
        name: 'Basic Farm',
        canBuy: false,
        isBought: false,
        assignedPandas: 0,
        woodNeeded: 10,
        foodNeeded: 10,
        canAssignPandas: false,
        resourceType: 'food',
        perTick: 1,
        pandasAccepted: true
      }  as Building;
      this.buildings.push(building);
  }

  updateUsage(resourse: Resources) {
    for (const building of this.buildings) {
      const hasResearch = building.woodNeeded <= resourse.totalOverallWood && building.foodNeeded <= resourse.totalOverallFood;
      if (hasResearch) {
        if (!building.isBought) {
          building.canBuy = true;
        }
        if (building.pandasAccepted && building.isBought) {
         building.canAssignPandas = true;
        }
      }
    }
  }

  buyBuilding(building: Building) {
    building.isBought = true;
    building.canBuy = false;
    this.callResourse.spendResource(building.foodNeeded, building.woodNeeded);
    this.updateBuilding(building);
  }

  assignPandaToBuilding(building: Building) {
    building.assignedPandas += 1;
    this.updateBuilding(building);
  }

  updateBuilding(building: Building) {
    const index =  this.buildings.findIndex(item => item.name === building.name);
    this.buildings[index] = building;
  }

  getBuildings(): Observable<Building[]> {
    return of(this.buildings);
  }

  getHasBuildings(): Observable<boolean> {
    return of(this.buildings.some(building => building.canBuy));
  }
}
