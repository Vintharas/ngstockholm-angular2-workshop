import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/Rx';

import { Person } from '../people/person';

const PEOPLE : Person[] = [
      {id: 1, name: 'Luke Skywalker', height: 177, weight: 70, profession: ''},
      {id: 2, name: 'Darth Vader', height: 200, weight: 100, profession: ''},
      {id: 3, name: 'Han Solo', height: 185, weight: 85, profession: ''},
    ];

@Injectable()
export class StarWarsService{

  getAll() : Person[] {
    return PEOPLE.map(p => this.clone(p));
  }
  get(id: number) : Person {
    return this.clone(PEOPLE.find(p => p.id === id));
  }
  save(person: Person){
    let originalPerson = PEOPLE.find(p => p.id === person.id);
    if (originalPerson) Object.assign(originalPerson, person);
    // saved muahahaha
  }

  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }
}
