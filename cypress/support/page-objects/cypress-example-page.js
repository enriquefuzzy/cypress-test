class CypressExamplePage {
    getGetLink() {
        return cy.get('.home-list ul li a').eq(0)
    }

    getContainsLink() {
        return cy.get('.home-list ul li a').eq(1)
    }

    getWithinLink() {
        return cy.get('.home-list ul li a').eq(2)
    }

    getRootLink() {
        return cy.get('.home-list ul li a').eq(3)
    }
}
export default CypressExamplePage