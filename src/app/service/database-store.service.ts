import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Resources} from '../class/resourse';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DatabaseStoreService {
  resoursesCollection: AngularFirestoreCollection<Resources>;
  resourses: Observable<Resources[]>;
  resoursesDoc: AngularFirestoreDocument<Resources>;
  item: Item;


  constructor(public afs: AngularFirestore) {
    this.resoursesCollection = this.afs.collection<Resources>('Resourse');
    this.resourses = this.resoursesCollection.valueChanges();
    this.resoursesDoc = this.afs.doc('Resourse/Test');
  }

  getItems() {
    return this.resourses;
  }

  getItem() {
    return this.resoursesDoc;
  }

  updateResrouse(resourse: Resources) {
    this.item = {};
    this.item.id = 'Test';
    this.item.food = resourse.food;
    this.item.wood = resourse.wood;

    this.resoursesDoc = this.afs.doc('Resourse/' + this.item.id);
    this.resoursesDoc.update(this.item);
  }
}

export interface Item {
  id?: string;
  food?: number;
  wood?: number;
}
