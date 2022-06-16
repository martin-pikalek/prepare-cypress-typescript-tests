// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Import dayjs library
import * as dayjs from 'dayjs';
// Import utc plugin of dayjs library
import utc from 'dayjs/plugin/utc';
// Import timezone plugin of dayjs library
import timezone from 'dayjs/plugin/timezone';

// Assign dayjs library types to global Cypress.dayjs variable
declare global {
  namespace Cypress {
    interface Cypress {
      dayjs: typeof dayjs.default;
    }
  }
}

// Assign dayjs to global Cypress variable
Cypress.dayjs = dayjs.default;

// Extend dayjs with utc and timezone plugins
Cypress.dayjs.extend(utc);
Cypress.dayjs.extend(timezone);

// Set default timezone of dayjs library
Cypress.dayjs.tz.setDefault('Europe/Prague');
