/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to get DOM elements which match data-cy selector value.
     * @param selector The data-cy selector string value.
     * @param options The other options.
     * @example
     * cy.dataCy('<selector>', <options>)
     * @returns
     * cy.get(`[data-cy=${selector}]`, options)
     **/
    dataCy(
      selector: string,
      options?: Partial<Cypress.Loggable & Cypress.Timeoutable>
    ): Chainable<Subject>;
    /**
     * Custom command to get DOM elements which contains data-cy selector value.
     * @param selector The data-cy selector string value.
     * @param options The other options.
     * @example
     * cy.dataCyLike('<selector>', <options>)
     * @returns
     * cy.get(`[data-cy*=${selector}]`, options)
     **/
    dataCyLike(
      selector: string,
      options?: Partial<Cypress.Loggable & Cypress.Timeoutable>
    ): Chainable<Subject>;
  }
}
