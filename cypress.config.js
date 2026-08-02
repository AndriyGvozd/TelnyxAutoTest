const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "7otkbt",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
