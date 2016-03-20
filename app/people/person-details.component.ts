import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, Router} from 'angular2/router';
import { NgForm }    from 'angular2/common';

import { StarWarsService } from '../services/starwars.service';
import { Person } from './person';

@Component({
  selector: 'person-details',
  templateUrl: 'app/people/person-details.component.html',
  styleUrls: ['app/people/person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
    @Input() person : Person;
    professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];

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
    savePersonDetails(){
      this.starWarsService.save(this.person);
    }
}
