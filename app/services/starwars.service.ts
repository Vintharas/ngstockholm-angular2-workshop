import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/Rx';
import { Person } from '../people/person';

@Injectable()
export class StarWarsService{

  getAll() : Person[] {
    return [
      {name: 'Luke Skywalker', height: 177, weight: 70},
      {name: 'Darth Vader', height: 200, weight: 100},
      {name: 'Han Solo', height: 185, weight: 85},
    ];
  }

}
