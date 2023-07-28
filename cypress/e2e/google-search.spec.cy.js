import GoogleSearchPage from "../support/page-objects/google-search-page";

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
    const googleSearchPage = new GoogleSearchPage()

    googleSearchPage.getSearchTextbox().type(this.data.dog_search).type('{enter}')
    cy.url().should('include', '/search?q=Dogs')
    googleSearchPage.getSearchTextbox().should('have.value', 'Dogs')
    cy.contains('Dog').should('exist')
    googleSearchPage.getSearchResultTitleText().should('have.text', 'Dog')
        .and('have.attr', 'role', 'heading')
  })

  // Example using explicit assertion
  it('Verify explicit search for "Cat"', function () {
    const googleSearchPage = new GoogleSearchPage()
    
    googleSearchPage.getSearchTextbox().type(this.data.cat_search).type('{enter}')
    cy.url().should('include', '/search?q=Cats')
    googleSearchPage.getSearchTextbox().should('have.value', 'Cats')
    googleSearchPage.getSearchResultTitleText().then(function($e){
        expect($e).to.contain('Cat')
    })
  })
})
