///<reference types="Cypress"/>
describe('Launch Sample Application', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com');
    cy.get("input[name='username']").type('test');
    cy.get("input[name='password']").type('test');
  })
})