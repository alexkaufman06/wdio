const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');

defineSupportCode(function({ Given, When, Then }) {
  Given(/^I have navigated to webdriver.io$/, function() {
    browser.url('https://webdriver.io/');
  });
  When('I click get started and navigate to that page', function () {
    const getStartedButton = $('.buttonWrapper > a');
    getStartedButton.click();
    browser.pause(1500);
  });
  Then('I expect that the title of the page to contain the text', function() {
    var title = browser.getTitle();
    assert.equal(title, "Getting Started · WebdriverIO");
  });
});