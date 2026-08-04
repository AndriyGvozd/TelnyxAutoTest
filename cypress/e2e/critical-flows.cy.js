import HomePage from '../support/pageObjects/HomePage';

describe('Telnyx Website', () => {
    beforeEach(() => {
        HomePage.visit();
    });

    it('TC-01: Homepage loads successfully', () => {
        HomePage.heroHeadline.should('have.text', 'Infrastructure for real-time agents');
    });

    it('TC-02: Clicking logo redirects to homepage', () => {
        cy.visit('https://telnyx.com/contact-us');

        HomePage.logoLink.click();

        cy.url().should('eq', 'https://telnyx.com/');
        HomePage.heroHeadline.should('have.text', 'Infrastructure for real-time agents');
    });

    it('TC-03: Verify the "Pricing" dropdown menu is displayed', () => {
        HomePage.pricingDropdown.click();

        HomePage.pricingDropdown
            .should('have.attr', 'aria-expanded', 'true')
            .and('have.attr', 'data-state', 'open');
    });

    it('TC-04: Log in button has correct href', () => {
        HomePage.loginLink
            .invoke('removeAttr', 'target')
            .click({multiple: true, force: true});

        cy.url().should('include', 'portal.telnyx.com');
    });

    it('TC-05: Sign up button opens registration page', () => {
        HomePage.signupButton.first().click();

        cy.url().should('include', '/sign-up');
    });

    it('TC-06: Contact us button opens Contact page', () => {
        HomePage.contactUsLink.click();

        cy.url().should('include', '/contact-us');
    });

    it('TC-07: Talk to an expert button opens Contact page', () => {
        HomePage.talkToExpertButton.click();

        cy.url().should('include', '/contact-us');
    });

    it('TC-08: Privacy Policy link has correct href', () => {
        HomePage.footer.scrollIntoView();

        HomePage.privacyPolicyLink.click();

        cy.url().should('include', '/privacy-policy');
    });

    it('TC-09: LinkedIn link is correct', () => {
        HomePage.footer.scrollIntoView();

        HomePage.linkedInLink
            .should('have.attr', 'href')
            .and('include', 'linkedin.com/company/telnyx');
    });
});