# cypress-testing

## Requirements:
- Node: v18.16.1
- Cypress: 12.17.0

## Description
Automate Cypress Command examples from https://example.cypress.io/

### example-cypress-spec.cy.js
Tests run through each Cypress Command in the Querying, Traversal, and Actions sections

Each page (Querying, Traversal, Actions) has it's own `describe` function.

Cypress Command examples are separated into their own `it` functions.

### google-search-spec.cy.js
Tests search for "Dogs" and "Cats" on Google then use implicit/explicit assertions to verify the search result

## How to execute tests
Open Cypress with `npx cypress open`

Tests are automatically run when file is saved.

Run tests headless with `npx cypress run` or `npx cypress run --headless`

Run a single spec with like this `npx cypress run --spec "cypress/e2e/google-search.spec.cy.js"`