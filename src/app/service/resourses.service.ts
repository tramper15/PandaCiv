import { Injectable } from '@angular/core';
import {Resources} from '../class/resourse';

@Injectable()
export class ResourcesService {
  public resource: Resources;
  constructor() {
    this.resource = new Resources();
  }

  addFood() {
    this.resource.food += 1;
  }
  addWood() {
    this.resource.wood += 1;
  }
}
