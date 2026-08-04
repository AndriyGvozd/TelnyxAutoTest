class HomePage {
  visit() {
    cy.visit('/');
    return this;
  }

  get heroHeadline() {
    return cy.get('#hero-headline');
  }

  get logoLink() {
    return cy.get('header a[href="/"]').first();
  }

  get pricingDropdown() {
    return cy.contains('button', 'Pricing');
  }

  get loginLink() {
    return cy.get('a[href="https://portal.telnyx.com"]');
  }

  get signupButton() {
    return cy.contains('a', 'Sign up');
  }

  get contactUsLink() {
    return cy.get('a[href="https://telnyx.com/contact-us"]').filter(':visible');
  }

  get talkToExpertButton() {
    return cy.get('[data-content="TALK TO AN EXPERT"]');
  }

  get footer() {
    return cy.get('footer');
  }

  get privacyPolicyLink() {
    return cy.get('a[href="/privacy-policy"]');
  }

  get linkedInLink() {
    return cy.get('footer a[href*="linkedin.com/company/telnyx"]');
  }

  get burgerMenu() {
    return cy.get('button[aria-controls="main-menu-content"]');
  }
}

export default new HomePage();