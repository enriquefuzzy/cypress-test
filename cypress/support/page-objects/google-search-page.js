class GoogleSearchPage {
    getSearchTextbox() {
        return cy.get('[name=q]')
    }
    getSearchResultTitleText() {
        return cy.get('[data-attrid=title]')
    }
}
export default GoogleSearchPage