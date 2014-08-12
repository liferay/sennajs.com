'use strict';

var fs = require('fs');
var path = require('path');
var soynode = require('soynode');
var util = require('util');
var config = require('./ProductFlavors').generateFlavoredConfig();
var TemplateEngine = require('./TemplateEngine');

/**
 * Soy template engine implementation.
 * @constructor
 */
function SoyTemplateEngine() {
  TemplateEngine.call(this);
}

util.inherits(SoyTemplateEngine, TemplateEngine);

/**
 * Holds the default template name.
 * @type {String}
 */
SoyTemplateEngine.prototype.defaultLayout = 'layout';

/**
 * Gets the default template name.
 * @return {String}
 */
SoyTemplateEngine.prototype.getDefaultLayout = function() {
  return this.defaultLayout;
};

/**
 * @inheritDoc
 */
SoyTemplateEngine.prototype.compileTemplates = function(searchPath, locale, options, callback) {
  options = options || {};

  if (!options.locales) {
    options.locales = locale ? [locale] : null;
  }
  if (!options.messageFilePathFormat && config.translationsFilepath) {
    options.messageFilePathFormat = path.join(process.cwd(), config.translationsFilepath);
  }

  soynode.setOptions(options);

  searchPath = path.resolve(process.cwd(), searchPath);

  if (!fs.existsSync(searchPath)) {
    throw new Error('Templates search path doesn\'t exist.');
  }
  soynode.compileTemplates(searchPath, callback || function(err) {
    if (err) {
      throw err;
    }
  });
};

/**
 * @inheritDoc
 */
SoyTemplateEngine.prototype.render = function(templateName, templateData, locale, layout, opt_injectedData) {
  templateData = templateData || {};

  var templateFn = soynode.get(templateName, locale);
  if (!templateFn) {
    throw new Error('Unable to find template: ' + templateName);
  }

  var layoutFn;
  var renderLayout = templateData.layout || layout;
  if (renderLayout) {
    layoutFn = soynode.get(renderLayout, locale);
    if (!layoutFn) {
      throw new Error('Unable to find layout template: ' + renderLayout);
    }
  }

  var injectedData = opt_injectedData || {};
  if (!layoutFn) {
    return templateFn(templateData, null, injectedData);
  }

  // Injects template contents into layout data.
  injectedData[this.defaultLayout] = templateFn(templateData, null, injectedData);

  return layoutFn(templateData, null, injectedData);
};

/**
 * Sets default layout name. Relevant when a shared template is used to wrap
 * other templates such as adding header, footer etc.
 * @param {String} defaultLayout
 */
SoyTemplateEngine.prototype.setDefaultLayout = function(defaultLayout) {
  this.defaultLayout = defaultLayout;
};

module.exports = SoyTemplateEngine;
