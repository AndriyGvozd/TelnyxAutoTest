class HomePage {
  visit() {
    cy.visit('https://telnyx.com');
    return this;
  }

  get heroHeadline() {
    return cy.get('#hero-headline');
  }

  get logoLink() {
    return cy.get('header a[href="/"]').first();
  }

  get pricingDropdown() {
    return cy.get('#radix-_R_16qcivb_');
  }

  get loginLink() {
    return cy.get('a[href="https://portal.telnyx.com"]');
  }

  get signupButton() {
    return cy.contains('span', 'Sign up');
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
}

export default new HomePage();