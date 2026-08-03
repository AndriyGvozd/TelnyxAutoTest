describe('responsive', () => {

    it('TC-10: Burger menu icon is displayed on mobile', () => {
        cy.visit('https://telnyx.com');

        cy.get('button[aria-controls="main-menu-content"]')
            .should('be.visible');

        cy.contains('Products').should('not.be.visible');
    });
    
})