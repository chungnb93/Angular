import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
 
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb(){
    const heroes = [
      { id: 1, name: 'Nguyễn Văn A' },
      { id: 2, name: 'Trần Thị B' },
      { id: 3, name: 'Nguyễn Thị C' },
      { id: 4, name: 'Trần Văn A' },
      { id: 5, name: 'Hoàng Thị C' },
      { id: 6, name: 'Hoàng Văn D' },
      { id: 7, name: 'Phan Văn A' },
      { id: 8, name: 'Trần Hoàng A' },
      { id: 9, name: 'Phạm Công E' },
      { id: 10, name: 'Nguyễn Văn Trần' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
