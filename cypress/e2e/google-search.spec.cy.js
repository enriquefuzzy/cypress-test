describe('Google search', () => {
    // Example using implicit assertion
    it('Verify search for "Dogs"', () => {
        cy.visit('https://www.google.com')
        cy.get('[name=q]').type('Dogs{enter}')
        cy.contains('Dog').should('exist')
    })

    // Example using explicit assertion
    it('Verify explicit search for "Cat"', () => {
        cy.visit('https://www.google.com')
        cy.get('[name=q]').type('Cats{enter}')
        cy.get('[data-attrid=title]').then(function($e){
            expect($e).to.contain('Cat')
        })
    })
})
