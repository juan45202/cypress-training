const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "video": false,
    "screenshotOnRunFailure": false,
    "defaultCommandTimeout": 20000,
    "responseTimeout": 20000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
