import { Injectable } from '@angular/core';
import {Resources} from '../class/resourse';
import {DatabaseStoreService} from './database-store.service';
import {BuildingService} from './building.service';

@Injectable()
export class ResourcesService {
  public resource: Resources;
  public resourses: Resources[];
  constructor(private database: DatabaseStoreService,
                private buildingCalls: BuildingService) {
    this.resource = new Resources();
  }

  addFood() {
    this.resource.food += 1;
    this.resource.totalOverallFood += 1;
    this.buildingCalls.updateUsage(this.resource);

  }
  addWood() {
    this.resource.wood += 1;
    this.resource.totalOverallWood += 1;
    this.buildingCalls.updateUsage(this.resource);
  }

  setItem() {
    this.database.getItem().snapshotChanges().map(changes => {
        const data = changes.payload.data() as Resources;
        this.resource = data;
        console.log(data);
    });
  }
  setItems() {
    this.database.getItems().subscribe(items => {

      this.resource = new Resources();
      if (items) {
        this.resourses = items;
        console.log(items);
      }
    });
    if (this.resourses) {
      this.resource = this.resourses[0];
    }
  }
}
