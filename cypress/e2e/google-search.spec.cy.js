before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    })
  })

describe('Google search', function () {
    //Requires using function () callback instead of () =>
      beforeEach(() => {
        cy.visit('https://www.google.com')
    })

    // Example using implicit assertion
    // Must use function () callback in order to read data from this.data
    it('Verify search for "Dogs"', function () {
        cy.get('[name=q]').type(this.data.dog_search).type('{enter}')
        cy.url().should('include', '/search?q=Dogs')
        cy.get('[name=q]').should('have.value', 'Dogs')
        cy.contains('Dog').should('exist')
        cy.get('[data-attrid=title]').should('have.text', 'Dog')
            .and('have.attr', 'role', 'heading')
    })

    // Example using explicit assertion
    it('Verify explicit search for "Cat"', function () {
        cy.get('[name=q]').type(this.data.cat_search).type('{enter}')
        cy.url().should('include', '/search?q=Cats')
        cy.get('[name=q]').should('have.value', 'Cats')
        cy.get('[data-attrid=title]').then(function($e){
            expect($e).to.contain('Cat')
        })
    })
})
