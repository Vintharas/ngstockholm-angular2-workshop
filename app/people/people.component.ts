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
  <ul class="people">
    <li *ngFor="#person of people" >
      <a href="#" [routerLink]="['Person Details', {id: person.id}]">{{person.name}}</a>
    </li>
  </ul>
  `,
  styleUrls: ['app/people/people.component.css']
})
export class PeopleComponent implements OnInit{
  people: Person[] = [];
  selectedPerson: Person;

  constructor(private starWarsService : StarWarsService){ }

  ngOnInit(){
    //this.people = this.starWarsService.getAll();
    this.starWarsService
      .getAllPeople()
      .subscribe(p => this.people = p)
  }

  selectPerson(person: Person){
    this.selectedPerson = person;
  }
}
