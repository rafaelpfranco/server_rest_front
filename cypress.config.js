const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://front.serverest.dev',
    setupNodeEvents(on) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
  env: {
    userEmail: process.env.USER_EMAIL,
    userPassword: process.env.USER_PASSWORD,
  },
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  downloadsFolder: 'cypress/downloads',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
})
