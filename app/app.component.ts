import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{helloWorld}}</h1>
  `,
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  helloWorld:string = 'Hello World!!!! Angular 2 Yay!!';
}
