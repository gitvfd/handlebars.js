// karma.conf.js
module.exports = function(config) {
  // Example set of browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/platform combos
  const customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Linux'
    },
    sl_safari_9: {
      base: 'SauceLabs',
      browserName: 'safari',
      version: 9,
      platform: 'OS X 10.11'
    },
    sl_safari_8: {
      base: 'SauceLabs',
      browserName: 'safari',
      version: 8,
      platform: 'OS X 10.10'
    },
    sl_ie_10: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: 10,
      platform: 'Windows 8'
    },
    sl_ie_11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    }
  };
  config.set({
    frameworks: ['mocha'],
    sauceLabs: {
      testName: 'handlebars-unit-tests'
    },
    concurrency: 4,
    customLaunchers,
    browsers: Object.keys(customLaunchers),
    reporters: ['dots'],
    files: [
      'node_modules/sinon/pkg/sinon.js',
      'node_modules/chai/chai.js',
      'node_modules/dirty-chai/lib/dirty-chai.js',
      'node_modules/mocha/mocha.js',
      'dist/handlebars.js',
      'spec/browser-setup/browser-context.js',
      'spec/browser-setup/mocha.js',
      'spec/vendor/json2.js',
      'spec/env/common.js',
      'spec/*.js'
    ]
  });
};
