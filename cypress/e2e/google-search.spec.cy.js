describe('Google search', () => {
    // Example using implicit assertion
    it('Verify search for "Dogs"', () => {
        cy.visit('https://www.google.com')
        cy.get('[name=q]').type('Dogs{enter}')
        cy.url().should('include', '/search?q=Dogs')
        cy.get('[name=q]').should('have.value', 'Dogs')
        cy.contains('Dog').should('exist')
    })

    // Example using explicit assertion
    it('Verify explicit search for "Cat"', () => {
        cy.visit('https://www.google.com')
        cy.get('[name=q]').type('Cats{enter}')
        cy.url().should('include', '/search?q=Cats')
        cy.get('[name=q]').should('have.value', 'Cats')
        cy.get('[data-attrid=title]').then(function($e){
            expect($e).to.contain('Cat')
        })
    })
})
