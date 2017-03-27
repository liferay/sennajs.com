/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from errorHandling.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDevelopErrorHandlingHtml.
 * @public
 */

goog.module('docsDevelopErrorHandlingHtml.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias2 = Soy.getTemplate('ElectricCode.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('guide.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param307 = function() {
    ie_open('h1');
      itext('Error Handling');
    ie_close('h1');
    ie_open('article', null, null,
        'id', 'error-handling');
      ie_open('h2');
        itext('Error Handling');
      ie_close('h2');
      ie_open('p');
        itext('It\'s important to understand how to handle errors when using Senna.js. The three error handling options in Senna.js are Invalid Status, Request Error, and Timeout.');
      ie_close('p');
      ie_open('blockquote');
        ie_open('p');
          ie_open('strong');
            itext('Invalid Status:');
          ie_close('strong');
        ie_close('p');
        ie_open('p');
          itext('Returns true for an invalid status. Any status code 2xx or 3xx is considered valid.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('blockquote');
        ie_open('p');
          ie_open('strong');
            itext('Request Error:');
          ie_close('strong');
        ie_close('p');
        ie_open('p');
          itext('Returns true if there was an error with the request.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('blockquote');
        ie_open('p');
          ie_open('strong');
            itext('Timeout:');
          ie_close('strong');
        ie_close('p');
        ie_open('p');
          itext('Returns true if the request timed out.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('With just one simple funciton, you can control how your app handles those errors.');
      ie_close('p');
      $templateAlias2({code: '<script>\n  var app = new senna.App();\n\n  app.on(\'endNavigate\', function(event) {\n    if (event.error) {\n      if (event.error.invalidStatus) {\n        //do something to handle invalid status\n      }\n\n      if (event.error.requestError) {\n        //do something to handle an error with the request\n      }\n\n      if (event.error.timeout) {\n        //do something to handle a timeout\n      }\n\n      if (event.error.statusCode == 404) {\n        //return "Page Not Found" message\n      }\n    }\n  });\n<\/script>', mode: 'text'}, null, opt_ijData);
    ie_close('article');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param307}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDevelopErrorHandlingHtml.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class docsDevelopErrorHandlingHtml extends Component {}
Soy.register(docsDevelopErrorHandlingHtml, templates);
export { docsDevelopErrorHandlingHtml, templates };
export default templates;
/* jshint ignore:end */
