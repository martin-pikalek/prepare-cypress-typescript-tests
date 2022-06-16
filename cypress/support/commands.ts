/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Example of a custom command to get DOM elements which match data-cy selector value.
// Typescript type definitions for custom commands are defined in file support/types.d.ts
Cypress.Commands.add('dataCy', (selector, options = {}) => {
  return cy.get(`[data-cy=${selector}]`, options);
});

Cypress.Commands.add('dataCyLike', (selector, options = {}) => {
  return cy.get(`[data-cy*=${selector}]`, options);
});
