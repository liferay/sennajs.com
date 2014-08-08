'use strict';

/**
 * Template engine abstract class. Implement this class adds support to
 * multiple template engines on action classes.
 * @constructor
 */
function TemplateEngine() {
}

/**
 * Precompiles templates and setup soynode options.
 * @param {String} searchPath Path to look for views.
 * @param {Object} options SoyNode options.
 * @param {Function} callback Called after compilation finishes.
 */
TemplateEngine.prototype.precompileTemplates = function() {};

/**
 * Renders a SoyNode template based on a name.
 * @param {String} templateName The template name to be rendered.
 * @param {Object} templateData Data to be passed to the template.
 * @param {String} layout Layout to render templateName in.
 * @return {String}
 */
TemplateEngine.prototype.render = function() {};

module.exports = TemplateEngine;
