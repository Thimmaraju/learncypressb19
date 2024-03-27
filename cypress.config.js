const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com",
   //   viewportWidth: 1920,
   // viewportHeight: 1080,
    retries:{openMode:1, runMode: 2},
    //pageLoadTimeout: 120000,
    defaultCommandTimeout: 20000,
    watchForFileChanges: true,
    video: true,  
    //videoCompression: 51,
    videosFolder: "cypress/Raju",
    //specPattern: "cypress/e2e/**/*.raju.js",
    env:{

        "username": "Admin",
        "password": "admin123"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
