# Prepare Cypress Typescript Tests
### @ _starting template/boilerplate for cypress testing_

## Features

- ##### Cypress v10
    - all cypress files prepared for `typescript`
    - pre-configured for `e2e` testing
        - `component` testing is not pre-configured
        - can be easily configured within cypress application window if needed
    - included `dayjs` library for use of Date/Time utilities
        - as example of Cypress global variable mapping of external libraries
        - no need to import dayjs library in each test just use `Cypress.dayjs` global variable
    - example of `cypress custom commands` 
        - with type definitions
        - with type comments
- ##### Typescript
    - example of `path alias` configuration 
        - for more readable imports
    - cypress/support/types.d.ts file 
        - cypress custom commands `type definitions`
- ##### ESlint & Prettier (linter and formatter)
    - `eslint-plugin-prettier` (for rules of prettier formatting)   
    - `eslint-plugin-cypress` (for rules of cypress commands usage)
    - `eslint-plugin-chai-friendly` (for rules of chai assertions - expect/should)
    - `eslint-plugin-json` (for rules of JSON files formatting)
- ##### Husky & lint-staged (pre-commit & pre-push hooks)
    - pre-configured to execute lint and prettier formatting on `git commit`
- ##### Commitlint (commit-msg hook)
    - pre-configured to lint commit messages
    - available package.json script to start commit prompt cli
- ##### VScode Configuration
    - to use `eslint` as default formatter
    - to `auto-format` code on save and focus
    > Note: `eslint and prettier vscode extensions` have to be installed.
- ##### Gitlab pipeline
    - use of official cypress `docker` image (cypress/base)
    - cypress and npm `caching`
    - as example of `CICD integration`   

## Usage
> ## Note: `Still in development!` 
> - #### in meantime you can create your own project on github with this github template (it is public template).
> - #### later will be installation available as npx executable (As described below) 
>   -  #### will be possible to include this cypress testing template to already existing project
>   -  #### for example in application Frontend repository 

Run `npx prepare-cypress-typescript-tests` script and type name of your project `my-cypress-tests` as next argument
```sh
npx prepare-cypress-typescript-tests my-cypress-tests
```

## License

MIT

**Free Template, Hell Yeah!, Enjoy testing...**
