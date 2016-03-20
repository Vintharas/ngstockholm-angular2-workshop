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
        1. List people

## Part II. Extracting Responsibilities into Services

1. Refactor your people retrieving into a service
    1. Create a new service that wraps retrieving star wars people
    1. Use service in your component
    1. Register service provider in your application
    1. **EXERCISES**
        1. Create star wars service


## Useful References

* [Barbarian Meets Coding Angular 2 Wiki](http://www.barbarianmeetscoding.com/wiki/angular-2/)
* [Angular 2 docs](https://angular.io/)
* Check [John Papa's Angular 2 First Look Course](https://app.pluralsight.com/library/courses/angular-2-first-look/table-of-contents) and [Live Code Samples](jpapa.me/a2firstlook)
