import { Component, OnInit } from 'angular2/core';
import { Person } from './person';
import { StarWarsService } from '../services/starwars.service';

@Component({
  selector: 'people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul *ngFor="#person of people">
    <li>
      <a href="#" (click)="selectPerson(person)">{{person.name}}</a>
    </li>
  </ul>

  <!-- new syntax for ng-if -->
  <section *ngIf="selectedPerson">
    <h2>You selected: {{selectedPerson.name}}</h2>
    <h3>Description</h3>
    <p>
      {{selectedPerson.name}} weights {{selectedPerson.weight}} and is {{selectedPerson.height}} tall.
    </p>
  </section>
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
