import { Component } from 'angular2/core';
import { PeopleComponent } from './people/people.component';
import { StarWarsService } from './services/starwars.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <people-list></people-list>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [PeopleComponent],
  providers: [StarWarsService]
})
export class AppComponent {
  title:string = 'Star Wars Peoplez!';
}
