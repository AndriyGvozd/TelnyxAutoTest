const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7otkbt",
  e2e: {
    baseUrl: "https://telnyx.com",
    viewportWidth: 375,
    viewportHeight: 812,
    defaultCommandTimeout: 8000,
    specPattern: "cypress/e2e/responsive.cy.js",
  },
});