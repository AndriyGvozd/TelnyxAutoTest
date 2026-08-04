import HomePage from '../support/pageObjects/HomePage';

describe('responsive', () => {

    it('TC-10: Burger menu icon is displayed on mobile', () => {
        HomePage.visit();

        HomePage.burgerMenu.should('be.visible');

        cy.contains('Products').should('not.be.visible');
    });
    
})