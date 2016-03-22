# ngStockholm Workshop!

Hi! Welcome to ngStockholm! This repo contains our whole sample application.

## Requirements

In order use run this code examples you'll need to install [node and npm](https://nodejs.org/en/download/) (npm is installed automatically when you install node).

## How to run the examples

1. Clone the repository
2. Run `npm install` to install all necessary packages
3. Run `npm start`, this will start a simple http server, enable TypeScript compilation on file changes and automagically reload your browser. Wow!!
4. Start writing Angular 2
5. Profit

Note that when you clone the repository you'll get the complete finalized code sample application. If you want to see a specific part just run `git tag` to see the available parts. You can use `git checkout <tagname>` to checkout any specific version. To go back ot the complete application run `git checkout master`.

## Part I. Your First Component

1. Your First Component (A single view with list of things)
    1. Bootstrapping an angular 2 app
    1. Your first component: A star wars people list component
    1. Listing stuff: Basic template with `*ngFor`
    1. **EXERCISES**
        1. Create People component and List people

## Part II. Extracting Responsibilities into Services

1. Refactor your people retrieving into a service
    1. Create a new service that wraps retrieving star wars people
    1. Use service in your component
    1. Register service provider in your application
    1. **EXERCISES**
        1. Create star wars service

## Part III. Your Second Component. Learn more templat-y stuff

1. Create a second component for person details
    1. When you click on a person in the list you'll show person details
        1. event bindings
        1. interpolation
    1. Create a person details component to encapsulate person details
        1. property bindings
    1. **EXERCISES**
        1. Create Person Details component and show person information when you click on a person in the list

## Part IV. Routing: Navigating between Master and Detail

1. Instead of showing both at once, we'll enable routing between master and detail
    1. Setup these routes for your app
        1. Default route: people list
        2. Person details route with `id` as parameter
    1. **EXERCISES**
        1. Setup a master/detail routing

## Part V. Forms and Validation

1. Improve your person details so you can edit properties
    1. Forms and two-way data binding
    1. Validation
    1. **EXERCISES**
        1. Update person details so you can edit properties

## Part VI. Async: Updating our service to get REAL data!

1. Update service to get real data from an API
  1. Use angular 2 http service to get people
  1. Use http service to get a single person
  1. Use http service to save person (the API doesn't allow it but we can do an as-if)
  1. **EXERCISES**
      1. Update star wars service to get real data: get people, get person and save person

## Part VII. Styles!
## Part VIII. Bonus!!!!


## Useful References to Learn More

* [Angular 2 full docs](https://angular.io/)
* [Angular2 Cheetsheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
* [Angular 1 to Angular2 Quick References](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html)
* [Barbarian Meets Coding Angular 2 Wiki](http://www.barbarianmeetscoding.com/wiki/angular-2/)
* Check [John Papa's Angular 2 First Look Course](https://app.pluralsight.com/library/courses/angular-2-first-look/table-of-contents) and [Live Code Samples](jpapa.me/a2firstlook)

