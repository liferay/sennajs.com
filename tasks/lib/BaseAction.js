'use strict';

/**
 * Provides a base utility for action classes.
 * @constructor
 */
function BaseAction() {
}

/**
 * Holds the instance to this action's App.
 * @type {App}
 */
BaseAction.prototype.app = null;

/**
 * Holds template engine reference.
 * @type {TemplateEngine}
 */
BaseAction.prototype.templateEngine = null;

/**
 * Gets the template engine reference.
 * @return {TemplateEngine}
 */
BaseAction.prototype.getTemplateEngine = function() {
  return this.templateEngine;
};

/**
 * Renders template from name.
 * @param {String} templateName Name or namespace of the template to render.
 * @param {Object} templateData
 * @return {String} Returns the rendered template.
 */
BaseAction.prototype.render = function(templateName, templateData) {
  if (!this.templateEngine) {
    throw new Error('Template engine not set.');
  }
  return this.templateEngine.render(templateName, templateData, this.app.getLocale());
};

/**
 * Updates the current locale and calls the given callback once the app is ready
 * for it.
 * @param {String} locale
 * @param {Function} callback
 */
BaseAction.prototype.updateLocale = function(locale, callback) {
  this.app.updateLocale(locale, callback);
};

/**
 * Sets the template engine reference.
 * @param {TemplateEngine} templateEngine
 */
BaseAction.prototype.setTemplateEngine = function(templateEngine) {
  this.templateEngine = templateEngine;
};

module.exports = BaseAction;
