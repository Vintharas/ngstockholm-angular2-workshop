import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { Person } from './person';
import { PersonDetailsComponent } from './person-details.component';
import { StarWarsService } from '../services/starwars.service';

@Component({
  selector: 'people-list',
  directives: [PersonDetailsComponent, ROUTER_DIRECTIVES],
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul *ngFor="#person of people">
    <li>
      <a href="#" [routerLink]="['Person Details', {id: person.id}]">{{person.name}}</a>
    </li>
  </ul>
  `
})
export class PeopleComponent implements OnInit{
  people: Person[] = [];
  selectedPerson: Person;

  constructor(private starWarsService : StarWarsService){ }

  ngOnInit(){
    this.people = this.starWarsService.getAll();
  }

  selectPerson(person: Person){
    this.selectedPerson = person;
  }
}
