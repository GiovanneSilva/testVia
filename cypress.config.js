const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.avon.com.br/",
    chromeWebSecurity: false,
    failOnStatusCode: false,
  },
  setupNodeEvents(on, config) {
  },
});

