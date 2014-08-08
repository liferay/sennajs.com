'use strict';

var args = require('yargs').argv;
var path = require('path');

/**
 * A product flavor defines a customized version of the application build by
 * the project. A single project can have different flavors which change the
 * generated application.
 * @param {!String} opt_configFilepath Optional <code>config.js</code> file
 *     path.
 * @constructor
 */
function ProductFlavors(opt_configFilepath) {
  if (opt_configFilepath) {
    this.setConfigFilepath(opt_configFilepath);
  }
}

/**
 * Generates a flavored config based on the CLI <code>flavor</code> parameter.
 * @return {Object} Returns a flavored configuration object.
 * @static
 */
ProductFlavors.generateFlavoredConfig = function() {
  var productFlavors = new ProductFlavors();
  return productFlavors.generateConfig(args.flavor);
};

/**
 * Holds the app <code>config.js</code> file path.
 * @type {String}
 * @default src/config.js
 * @protected
 */
ProductFlavors.prototype.appConfigFilepath = 'src/config.js';

/**
 * Holds the <code>config.js</code> file path.
 * @type {String}
 * @default config.js
 * @protected
 */
ProductFlavors.prototype.configFilepath = 'config.js';

/**
 * Generates a configuration object. If <code>opt_flavor</code> is specified
 * returns a flavored configuration instead.
 * @param {!String} opt_flavor Optional flavor.
 * @return {Object} Returns the configuration object.
 */
ProductFlavors.prototype.generateConfig = function(opt_flavor) {
  var i;
  var config;

  try {
    config = require(this.getConfigFilepath());
  } catch (err) {
    throw new Error('Build config cannot be loaded.');
  }

  // Merges src/config.js into configuration object before applying flavors.
  try {
    var app = require(this.getAppConfigFilepath());
    for (i in app.defaultConfig) {
      config.defaultConfig[i] = app.defaultConfig[i];
    }
    for (i in app.defaultConfig) {
      config.productFlavors[i] = app.productFlavors[i];
    }
  } catch (err) {}

  // Merges default configuration into build variant.
  var configVariant = {};
  for (i in config.defaultConfig) {
    configVariant[i] = config.defaultConfig[i];
  }

  // Merges optional flavor into build variant.
  if (config.productFlavors && config.productFlavors.hasOwnProperty(opt_flavor)) {
    var flavorConfig = config.productFlavors[opt_flavor];
    for (i in flavorConfig) {
      configVariant[i] = flavorConfig[i];
    }
  }

  return configVariant;
};

/**
 * Gets the app configuration file path attribute value.
 * @return {String}
 */
ProductFlavors.prototype.getAppConfigFilepath = function() {
  return path.resolve(process.cwd(), this.appConfigFilepath);
};

/**
 * Gets the configuration file path attribute value.
 * @return {String}
 */
ProductFlavors.prototype.getConfigFilepath = function() {
  return path.resolve(process.cwd(), this.configFilepath);
};

/**
 * Sets the app configuration file path attribute value.
 * @param {String} appConfigFilepath
 */
ProductFlavors.prototype.setAppConfigFilepath = function(appConfigFilepath) {
  this.appConfigFilepath = appConfigFilepath;
};

/**
 * Sets the configuration file path attribute value.
 * @param {String} configFilepath
 */
ProductFlavors.prototype.setConfigFilepath = function(configFilepath) {
  this.configFilepath = configFilepath;
};

module.exports = ProductFlavors;
