# cypress-testing

Node: v18.16.1
Cypress: 12.17.0

Use `npx cypress open` to open Cypress

Tests automatically run when file is saved.

Follows steps from [Writing Your First E2E Test](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test?utm_source=Binary%3A+App&utm_medium=Docs+Menu&utm_content=First+Test) from the Cypress documentation.

Steps of test:
1. Visit: https://example.cypress.io
2. Find the element with content: type
3. Click on it
4. Get the URL
5. Assert it includes: /commands/actions
6. Get the input with the action-email data-testid
7. Type fake@email.com into the input
8. Assert the input reflects the new value

Or in the Given, When, Then syntax:

1. Given a user visits https://example.cypress.io
2. When they click the link labeled type
3. And they type "fake@email.com" into the [data-testid="action-email"] input
4. hen the URL should include /commands/actions
5. And the [data-testid="action-email"] input has "fake@email.com" as its value
