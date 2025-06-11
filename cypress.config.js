// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // 1) où trouver vos tests
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    // 2) l’URL de votre appli en local (npm start sur 3000 par défaut)
    baseUrl: "http://localhost:3000",

    setupNodeEvents(on, config) {
      // vos éventuels plugins / hooks
    },
  },
});
