const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl:'https://redpaviqa.opitech.com.co/redpavi/auth/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
