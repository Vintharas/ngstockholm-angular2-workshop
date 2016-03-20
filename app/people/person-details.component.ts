import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, Router} from 'angular2/router';

import { StarWarsService } from '../services/starwars.service';
import { Person } from './person';

@Component({
  selector: 'person-details',
  template: `
  <!-- new syntax for ng-if -->
  <section *ngIf="person">
    <h2>You selected: {{person.name}}</h2>
    <h3>Description</h3>
    <p>
      {{person.name}} weights {{person.weight}} and is {{person.height}} tall.
    </p>
  </section>
  <button (click)="gotoPeoplesList()">Back to peoples list</button>
  `
})
export class PersonDetailsComponent implements OnInit {
  @Input() person : Person;

    constructor(private starWarsService: StarWarsService,
               private routeParams: RouteParams,
               private router: Router){
    }
    ngOnInit(){
        let id = Number.parseInt(this.routeParams.get('id'));
        this.person = this.starWarsService.get(id);
    }
    gotoPeoplesList(){
        let link = ['Persons'];
        this.router.navigate(link);
        // could also use:
        // window.history.back();
    }
}
