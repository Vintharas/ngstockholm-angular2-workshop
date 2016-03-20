import { Component } from 'angular2/core';
import { Person } from './person';

@Component({
  selector: 'people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul *ngFor="#person of people">
    <li>
      {{person.name}}
    </li>
  </ul>
  `
})
export class PeopleComponent{
  people: Person[] = [
    {name: 'Luke Skywalker', height: 177, weight: 70},
    {name: 'Darth Vader', height: 200, weight: 100},
    {name: 'Han Solo', height: 185, weight: 85},
  ];

}
