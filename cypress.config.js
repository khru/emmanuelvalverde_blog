const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
    excludeSpecPattern: ['*.md'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature,cy.js}',
  },
})
