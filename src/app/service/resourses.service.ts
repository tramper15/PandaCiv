import { Injectable } from '@angular/core';
import {Resources} from '../class/resourse';
import {DatabaseStoreService} from './database-store.service';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ResourcesService {
  public resource: Resources;
  public resourses: Resources[];
  constructor(private database: DatabaseStoreService) {
    this.resource = new Resources();
  }

  addFood() {
    this.resource.food += 1;
    this.resource.totalOverallFood += 1;

  }
  addWood() {
    this.resource.wood += 1;
    this.resource.totalOverallWood += 1;
  }

  setItem() {
    this.database.getItem().snapshotChanges().map(changes => {
        const data = changes.payload.data() as Resources;
        this.resource = data;
        console.log(data);
    });
    console.log('Set Item');
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

  getResource(): Observable<Resources> {
    return of(this.resource);
  }
}
