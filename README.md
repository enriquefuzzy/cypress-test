# cypress-testing

## Requirements:
- Node: v18.16.1
- Cypress: 12.17.0

## Description
Automate Cypress Command examples from https://example.cypress.io/

Tests are separated in example-cypress-spec.cy.js by Querying, Traversal, and Actions pages.

Each page (Querying, Traversal, Actions) has it's own `describe` function.

Cypress Command examples are separated into their own `it` functions.

Initial setup followed steps from [Writing Your First E2E Test](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test?utm_source=Binary%3A+App&utm_medium=Docs+Menu&utm_content=First+Test)

## How to execute tests
Use `npx cypress open` to open Cypress

Run headless with `npx cypress run --headless`

Tests automatically run when file is saved.
