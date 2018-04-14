import { Injectable } from '@angular/core';
import {Resources} from '../class/resourse';
import {DatabaseStoreService} from './database-store.service';

@Injectable()
export class ResourcesService {
  public resource: Resources;
  public resourses: Resources[];
  constructor(private database: DatabaseStoreService) {
    this.resource = new Resources();
  }

  addFood() {
    this.resource.food += 1;
  }
  addWood() {
    this.resource.wood += 1;
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
