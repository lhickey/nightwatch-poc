var config = require('../nightwatch.conf.js');

module.exports = { // adapted from: https://git.io/vodU0
  '@tags': ['sanity'],
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://saucelabs.com/test/guinea-pig')
      .waitForElementVisible('body')
      .assert.title('I am a page title - Sauce Labs')
      .saveScreenshot('guinea-pig-test.png')
      .end();
  },

  '@tags': ['form'],
  'Guinea Pig Assert Checkboxes': function(browser) {
      browser
        .url('https://saucelabs.com/test/guinea-pig')
        browser.expect.element('body').to.be.present.before(1000)
        browser.expect.element('input[id=unchecked_checkbox]').to.not.be.selected;
        browser.expect.element('input[id=checked_checkbox]').to.be.selected;
        browser.saveScreenshot('guinea-pig-test-fluid.png')
        browser.end();
    },

  '@tags': ['form'],
  'Guinea Pig Assert Email Address': function(browser) {
      browser
        .url('https://saucelabs.com/test/guinea-pig')
        browser.expect.element('body').to.be.present.before(1000)
        browser.setValue('input[name=fbemail]', 'info@fdsfkjdsk')
        browser.saveScreenshot('guinea-pig-test-email.png')
        browser.end();
    },

  '@tags': ['form'],
 'Guinea Pig Assert Submit Button': function(browser) {
      browser
        .url('https://saucelabs.com/test/guinea-pig')
        browser.expect.element('body').to.be.present.before(1000)
        browser.click('input[name=submit]')
        browser.saveScreenshot('guinea-pig-test-email.png')
        browser.end();
}
};



