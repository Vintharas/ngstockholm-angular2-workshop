import { Component } from 'angular2/core';
// RouteConfig decorator => let's you configure routing in a declarative way
// ROUTER_DIRECTIVES => let's you use router directives like router-outlet
// ROUTER_PROVIDERS => let's you inject router services like
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
// HTTP_PROVIDERS =. let's you inject http service
import { HTTP_PROVIDERS } from 'angular2/http';
import { PeopleComponent} from './people/people.component';
import { PersonDetailsComponent } from './people/person-details.component';
import { StarWarsService } from './services/starwars.service';

// The component binding let's you package a view, view model and styles together
@Component({
  selector: 'my-app',
  template: `
  <section class="app">
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  </section>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [PeopleComponent, ROUTER_DIRECTIVES],
  providers: [StarWarsService, ROUTER_PROVIDERS, HTTP_PROVIDERS]
})
// Route config let's you map routes to components
@RouteConfig([
  { path: '/persons', name: 'Persons', component: PeopleComponent, useAsDefault: true },
  { path: '/persons/:id', name: 'Person Details', component: PersonDetailsComponent },
])
export class AppComponent {
  title:string = 'Star Wars Peoplez!';
}
