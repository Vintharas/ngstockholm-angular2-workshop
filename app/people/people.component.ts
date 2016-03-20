import { Component, OnInit } from 'angular2/core';
import { Person } from './person';
import { PersonDetailsComponent } from './person-details.component';
import { StarWarsService } from '../services/starwars.service';

@Component({
  selector: 'people-list',
  directives: [PersonDetailsComponent],
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul *ngFor="#person of people">
    <li>
      <a href="#" (click)="selectPerson(person)">{{person.name}}</a>
    </li>
  </ul>
  <person-details [person]="selectedPerson"></person-details>
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
