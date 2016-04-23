import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Person } from '../people/person';

@Injectable()
export class StarWarsService{
  private baseUrl: string = 'http://swapi.co/api';

  constructor(private http : Http){}

  getAllPeople(): Observable<Person[]>{
    let people$ = this.http
      .get(`${this.baseUrl}/people`)
      .map(mapPersons);
      return people$;
  }
  getPerson(id: number): Observable<Person> {
    let person$ = this.http
      .get(`${this.baseUrl}/people/${id}`)
      .map(mapPerson);
      return person$;
  }
  savePerson(person: Person) : Observable<Response>{
    return this.http
      .post(`${this.baseUrl}/people/${person.id}`, JSON.stringify(person));
  }
}

function mapPersons(response:Response): Person[]{
   return response.json().results.map(toPerson)
}

function mapPerson(response:Response): Person{
   return toPerson(response.json());
}

function toPerson(r:any): Person{
  let person = <Person>({
    id: parseInt(r.url.replace('http://swapi.co/api/people/','').replace('/','')),
    url: r.url,
    name: r.name,
    weight: r.mass,
    height: r.height,
  });
  console.log('Parsed person:', person);
  return person;
}
