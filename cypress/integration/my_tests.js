describe('Form Tests', () => {
  it('can navigate to localhost:3000', () => {
    cy.visit('http://localhost:3000/pizza')
    cy.url().should('include', 'pizza')
  })
  describe('Type into input fields', () => {
    it('enter text into username field', () => {
      cy.get('input[name="username"]')
        .type('foobar')
        .should('have.value', 'foobar')
    })
  })
  describe('Can select all the toppings', () => {
    it('check box selecting', () => {
      cy.get('input[type="checkbox"]').each(c => cy.wrap(c)
        .click()
        .should('be.checked')
      )
    })
  })
  describe('Can select size', () => {
    it('select size small', () => {
      cy.get('select')
        .select('small')
        .should('have.value', 'small')
    })
  })
  describe('Submitting Form', () => {
    it('submit button clickable', () => {
      cy.get('button').should('be.enabled')
    })
    it('form submits', () => {
      //check the actual network request response
      cy.server()
      cy.route('POST', 'api/users').as('postUser')
      cy.get('button').click()
      cy.wait('@postUser').its('status').should('eq', 201)
    })
    it('response displayed in webpage', () => {
      cy.contains('{"username":"foobar","toppings":{"sausage":true,"pepperoni":true,"peppers":true,"mushrooms":true}')
    })
  })
})