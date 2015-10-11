// Require project's data
var config = require('../src/config.json');

// Define general tests (page load time, title etc.)
var generalTests = {

  'Page Loading Time' : function (client) {
    client
      .url('http://localhost:3000/')
      // Loading time 1 second
      .waitForElementVisible('body', 1000)
      // Assert Page title
      .assert.title(about.name)
  }
};

module.exports = generalTests;
