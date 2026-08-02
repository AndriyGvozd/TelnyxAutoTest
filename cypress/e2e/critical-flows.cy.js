describe('Telnyx Website', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://telnyx.com');
    });

    it('TC-01: Homepage loads successfully', () => {

        cy.get('#hero-headline').should('have.text', 'Infrastructure for real-time agents');
    });

    it('TC-02: Clicking logo redirects to homepage', () => {
        cy.visit('https://telnyx.com/contact-us');

        cy.get('header a[href="/"]')
            .first()
            .click();

        cy.url().should('eq', 'https://telnyx.com/');
        cy.get('#hero-headline').should('have.text', 'Infrastructure for real-time agents');
    });

    it('TC-03: Verify the "Pricing" dropdown menu is displayed', () => {
        cy.get('#radix-_R_16qcivb_').click();

        cy.get('#main-menu-content > div').should('be.visible');
    });

    it('TC-04: Log in button has correct href', () => { // Тут не поняв як вірно перевірити що відкривається нова вкладка, тому перевіряю href
        cy.get('a[href="https://portal.telnyx.com"]').should('be.visible').and('have.attr', 'href', 'https://portal.telnyx.com');
    });

    it('TC-05: Sign up button opens registration page', () => {
        cy.contains('span', 'Sign up').click();

        cy.url().should('include', '/sign-up');
    });

    it('TC-06: Contact us button opens Contact page', () => {
        cy.get('a[href="https://telnyx.com/contact-us"]')
            .filter(':visible')
            .click();

        cy.url().should('include', '/contact-us');
    });

    it('TC-07: Talk to an expert button opens Contact page', () => {
        cy.get('[data-content="TALK TO AN EXPERT"]').click();

        cy.url().should('include', '/contact-us');
    });

    it('TC-08: Privacy Policy link has correct href', () => {
        cy.get('footer').scrollIntoView();

        cy.get('a[href="/privacy-policy"]').click();

        cy.url().should('include', '/privacy-policy');
    });

    it('TC-09: LinkedIn link is correct', () => {
        cy.get('footer').scrollIntoView();

        cy.get('footer a[href*="linkedin.com/company/telnyx"]')
            .should('have.attr', 'href')
            .and('include', 'linkedin.com/company/telnyx');
    });

    it('TC-10: Burger menu icon is displayed on mobile', () => {
        cy.viewport(375, 812);
        cy.visit('https://telnyx.com');

        cy.get('button[aria-controls="main-menu-content"]')
            .should('be.visible');

        cy.contains('Products').should('not.be.visible');
    });

});