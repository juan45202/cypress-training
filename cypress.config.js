const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "video": false,
    "screenshotOnRunFailure": false,
    "defaultCommandTimeout": 60000,
    "responseTimeout": 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "retries": 2,
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
