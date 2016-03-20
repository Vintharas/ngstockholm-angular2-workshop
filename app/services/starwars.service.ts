import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/Rx';

import { Person } from '../people/person';

const PEOPLE : Person[] = [
      {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
      {id: 2, name: 'Darth Vader', height: 200, weight: 100},
      {id: 3, name: 'Han Solo', height: 185, weight: 85},
    ];

@Injectable()
export class StarWarsService{

  getAll() : Person[] {
    //var p: Person = {id: 1, name: 'df', height: 1, weight: 10}
    return PEOPLE;
  }
  get(id: number) : Person {
    return PEOPLE.find(p => p.id === id);
  }
}
