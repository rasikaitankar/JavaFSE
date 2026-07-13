describe('Retry, Chaining, Tracking http, sending http',() =>{
    it('Should retry until the element is visible and validate its text',() => {
        cy.visit('https://parabank.parasoft.com')
        cy.get("input[name='username']").type('test');
        cy.get("input[name='password']").type('test');
        //Rety logic with chaining
        cy.get("input[name='username']",{timeout:10000})
        .should('be.visible')
        .and('have.value','test');
    })
});