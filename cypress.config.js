const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qvjs9h',
  
  reporter: 'mochawesome',
  reporterOptions:{
    reportDir: 'cypress/report/mochawesome-report',
    overwrite:true,
    html:true,
    json:false,
    timestamp: 'mmddyyyy_HHMMss',
  },
  e2e: {
    baseUrl:'https://cvdb-terra.paas.dbserver.com.br/default/signIn',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
