// Development & Maintenance configuration
// For running cypress locally from your machine, not within a pipeline
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: 'https://argocd.dev.bigbang.mil',
    user: 'admin',
    password: 'Password123',
    timeout: 120000,
    keycloak_test_enable: false,
  },
  e2e: {
    video: true,
    screenshotOnRunFailure: true,
    parallel: false,
    trashAssetsBeforeRuns: true,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});