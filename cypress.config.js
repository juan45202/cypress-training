const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "video": false,
    "screenshotOnRunFailure": false,
    "defaultCommandTimeout": 40000,
    "responseTimeout": 40000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": false,
            "json": true
        }
    }
  },
});
