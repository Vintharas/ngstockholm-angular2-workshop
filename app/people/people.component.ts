import { Component, OnInit } from 'angular2/core';
import { Person } from './person';
import { StarWarsService } from '../services/starwars.service';

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
export class PeopleComponent implements OnInit{
  people: Person[] = [];
  constructor(private starWarsService : StarWarsService){ }

  ngOnInit(){
    this.people = this.starWarsService.getAll();
  }

}
