// import fixtureData from '../fixtures/example.json';
// you can use typescript path aliases to clean relative paths to data files (compared to commented import on top)
import fixtureData from '@fixtures/example.json';

it.skip('This is example test', () => {
  // listen to API requests matching the given path and replace the response with imported fixture data
  // - you can modify fixture before assigning it to the response
  // - recommended if you do not want to create many fixture files for different scenarios of same API endpoint
  cy.intercept('/api/example', fixtureData);

  // listen to API requests matching the given path and replace the response with fixture link
  // - you cannot modify fixture before assigning it to the response - it is only a link to the fixture
  // - recommended if you do not need to change data of the fixture
  cy.intercept('/api/example', { fixture: 'example' });

  // this is custom command - hover over command to see its description
  cy.dataCy('login-button').click();

  // example of usage of dayjs library assigned to global Cypress variable
  // - hover over dayjs function to check that typescript types are available (same for toISOString function)
  // - no additional imports of library is required in test files (library is globally available in cypress)
  const dateNow = Cypress.dayjs().toISOString();
  cy.log(dateNow);
});
