describe('Testing example with example.cypress.io', () => {
  it('Verify Querying page', () => {
    // cy.viewport('iphone-x')
    cy.visit('https://example.cypress.io')

    // Alternate ways to assert text
    cy.contains('Kitchen Sink').should('not.contain', 'asdf')
    cy.get('.banner h1').should('have.text', 'Kitchen Sink')

    cy.contains('get').click()

    // Verify on Querying page
    cy.url().should('include', '/commands/querying')
    cy.contains('Querying').should('exist')
    cy.contains('Examples of querying for DOM elements in Cypress, for a full reference of commands').should('exist')

    // cy.get() examples
    cy.get('#query-btn').should('contain', 'Button')
    cy.get('#query-btn').click()
    cy.get('[data-test-id="test-example"]').should('have.class', 'example')
    cy.get('[data-test-id="test-example"]').invoke('attr', 'data-test-id').should('equal', 'test-example')
    cy.get('[data-test-id="test-example"]').invoke('css', 'position').should('equal', 'static')

    // cy.contains() example
    cy.get('.query-list').contains('bananas').should('have.class', 'third')

    // .within() example
    cy.get('.query-form').within(() => {
      cy.get('input:first').should('have.attr', 'placeholder', 'Email')
    })

    // .type() examples
    cy.get('#inputEmail').should('have.attr', 'placeholder', 'Email')
    cy.get('#inputName').type('Enrique').should('have.value', 'Enrique')
    cy.get('#inputEmail').type('test@email.com')
    cy.get('#inputPassword').type('secret!')

    // cy.root() examples
    cy.root().should('match', 'html')
    cy.get('.query-ul').within(() => {
      // In this within, the root is now the ul DOM element
      cy.root().should('have.class', 'query-ul')
    })
  })

  it('Verify Traversal page', () => {
    // cy.viewport('iphone-x')
    cy.visit('https://example.cypress.io')
    cy.contains('children').click()

    // Verify on Traversal page
    cy.url().should('include', '/commands/traversal')
    cy.contains('Traversal').should('exist')
    cy.contains('Examples of traversing DOM elements in Cypress').should('exist')

    // .children() example
    cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Data')

    // .closest() example
    cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')

    // .eq() examples
    cy.get('.traversal-list>li').eq(1).should('contain', 'siamese')
    cy.get('.traversal-list>li').eq(3).should('contain', 'sphynx')
    cy.get('.traversal-list>li').eq(0).should('contain', 'tabby')

    // .filter() example
    cy.get('.traversal-nav>li').filter('.active').should('contain', 'About')

    // .find() example
    cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)

    // .first() example
    cy.get('.traversal-table td').first().should('contain', '1')

    // .last() example
    cy.get('.traversal-buttons .btn').last().should('contain', 'Submit')

    // .next() examples
    cy.get('.traversal-ul').contains('apples').next().should('contain', 'oranges')
    cy.get('.traversal-ul').contains('oranges').next().should('contain', 'bananas')

    // .nextAll() example
    cy.get('.traversal-next-all').contains('oranges').nextAll().should('have.length', 3)

    // .nextUntil() example
    cy.get('#veggies').nextUntil('#nuts').should('have.length', 3)

    // .not() example
    cy.get('.traversal-disabled .btn').not('[disabled]').should('not.contain', 'Disabled')

    // .parent() example
    cy.get('.traversal-mark').parent().should('contain', 'Morbi leo risus')

    // .parents() example
    cy.get('.traversal-cite').parents().should('match', 'blockquote')

    // .parentsUntil() example
    cy.get('.clothes-nav').find('.active').parentsUntil('.clothes-nav').should('have.length', 2)

    // .prev() example
    cy.get('.birds').find('.active').prev().should('contain', 'Lorikeets')

    // .prevAll() example
    cy.get('.fruits-list').find('.third').prevAll().should('have.length', 2)

    // .prevUntil() example
    cy.get('.foods-list').find('#nuts').prevUntil('#veggies').should('have.length', 3)

    // .siblings() example
    cy.get('.traversal-pills .active').siblings().should('have.length', 2)
  })

  it('Verify Actions page', () => {
    // cy.viewport(1280, 720)
    cy.visit('https://example.cypress.io')

    // Clicks the link with text 'type'
    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
    cy.contains('Actions').should('exist')
    cy.contains('Examples of actions being performed on DOM elements in Cypress,').should('exist')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
    // Clear textbox
    cy.get('.action-email').clear()
    cy.get('.action-email').type('slow.typing@email.com', { delay: 100 }).should('have.value', 'slow.typing@email.com')
    cy.get('.action-disabled')
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type('disabled error checking', { force: true })
      .should('have.value', 'disabled error checking')

    // .focus() example
    cy.get('.action-focus').focus()
      .should('have.class', 'focus')
      .prev().should('have.attr', 'style', 'color: orange;')

    // .blur() example
    cy.get('.action-blur').type('About to blur').blur()
      .should('have.class', 'error')
      .prev().should('have.attr', 'style', 'color: red;')

    // .clear() example
    cy.get('.action-clear').type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '')

    // .submit() example
    cy.get('.action-form').find('[type="text"]').type('HALFOFF')
    cy.get('.action-form').submit().next().should('contain', 'Your form has been submitted!')

    // .click() examples
    cy.get('.action-btn').click()
    // clicking in the center of the element is the default
    cy.get('#action-canvas').click()
    cy.get('#action-canvas').click('topLeft')
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('topRight')
    cy.get('#action-canvas').click('left')
    cy.get('#action-canvas').click('right')
    cy.get('#action-canvas').click('bottomLeft')
    cy.get('#action-canvas').click('bottom')
    cy.get('#action-canvas').click('bottomRight')
    // .click() accepts a an x and y coordinate
    // that controls where the click occurs :)
    cy.get('#action-canvas')
      .click(80, 75)
      .click(170, 75)
      .click(80, 165)
      .click(100, 185)
      .click(125, 190)
      .click(150, 185)
      .click(170, 165)
    // click multiple elements by passing multiple: true
    cy.get('.action-labels>.label').click({ multiple: true })
    // Ignore error checking prior to clicking
    cy.get('.action-opacity>.btn').click({ force: true })

    // .dbclick() example
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')

    // .rightclick() example
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')

    // .check() examples
    // By default, .check() will check all
    // matching checkbox or radio elements in succession, one after another
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
      .check().should('be.checked')

    cy.get('.action-radios [type="radio"]').not('[disabled]')
      .check().should('be.checked')

    // .check() accepts a value argument
    cy.get('.action-radios [type="radio"]')
      .check('radio1').should('be.checked')

    // .check() accepts an array of values
    cy.get('.action-multiple-checkboxes [type="checkbox"]')
      .check(['checkbox1', 'checkbox2']).should('be.checked')

    // Ignore error checking prior to checking
    cy.get('.action-checkboxes [disabled]')
      .check({ force: true }).should('be.checked')

    cy.get('.action-radios [type="radio"]')
      .check('radio3', { force: true }).should('be.checked')

    // .uncheck() examples
    // By default, .uncheck() will uncheck all matching
    // checkbox elements in succession, one after another
    cy.get('.action-check [type="checkbox"]').not('[disabled]')
      .uncheck().should('not.be.checked')

    // .uncheck() accepts a value argument
    cy.get('.action-check [type="checkbox"]').check('checkbox1')
      .uncheck('checkbox1').should('not.be.checked')

    // .uncheck() accepts an array of values
    cy.get('.action-check [type="checkbox"]').check(['checkbox1', 'checkbox3'])
      .uncheck(['checkbox1', 'checkbox3']).should('not.be.checked')

    // Ignore error checking prior to unchecking
    cy.get('.action-check [disabled]')
      .uncheck({ force: true }).should('not.be.checked')
    
    // .select() examples
    // at first, no option should be selected
    cy.get('.action-select').should('have.value', '--Select a fruit--')

    // Select option(s) with matching text content
    cy.get('.action-select').select('oranges')
    // confirm the apples were selected
    // note that each value starts with "fr-" in our HTML
    cy.get('.action-select').should('have.value', 'fr-oranges')

    cy.get('.action-select-multiple').select(['apples', 'oranges', 'bananas'])
    // when getting multiple values, invoke "val" method first
      .invoke('val').should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])

    // Select option(s) with matching value
    cy.get('.action-select').select('fr-bananas')
    // can attach an assertion right away to the element
      .should('have.value', 'fr-bananas')

    cy.get('.action-select-multiple').select(['fr-apples', 'fr-oranges', 'fr-bananas'])
      .invoke('val').should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
    // assert the selected values include oranges
    cy.get('.action-select-multiple').invoke('val').should('include', 'fr-oranges')

    // .scrollIntoView() examples
    cy.get('#scroll-horizontal button').should('not.be.visible')

    // scroll the button into view, as if the user had scrolled
    cy.get('#scroll-horizontal button').scrollIntoView()
      .should('be.visible')

    cy.get('#scroll-vertical button')
      .should('not.be.visible')

    // Cypress handles the scroll direction needed
    cy.get('#scroll-vertical button').scrollIntoView()
      .should('be.visible')

    cy.get('#scroll-both button')
      .should('not.be.visible')

    // Cypress knows to scroll to the right and down
    cy.get('#scroll-both button').scrollIntoView()
      .should('be.visible')
    
    // cy.scrollTo() examples
    // if you chain .scrollTo() off of cy, we will
    // scroll the entire window
    cy.scrollTo('bottom')

    cy.get('#scrollable-horizontal').scrollTo('right')

    // or you can scroll to a specific coordinate:
    // (x axis, y axis) in pixels
    cy.get('#scrollable-vertical').scrollTo(250, 250)

    // or you can scroll to a specific percentage
    // of the (width, height) of the element
    cy.get('#scrollable-both').scrollTo('75%', '25%')

    // control the easing of the scroll (default is 'swing')
    cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' })

    // control the duration of the scroll (in ms)
    cy.get('#scrollable-both').scrollTo('center', { duration: 2000 })

    // .trigger() example
    cy.get('.trigger-input-range')
      .invoke('val', 25)
      .trigger('change')
      .get('input[type=range]').siblings('p')
      .should('have.text', '25')
  })

  it('Verify navigating back to the home page', () => {
    // cy.viewport('iphone-x')
    cy.visit('https://example.cypress.io')

    cy.contains('get').click()
    cy.url().should('include', '/commands/querying')
    cy.go('back')
    cy.url().should('not.include', '/commands/querying')
  })
})
