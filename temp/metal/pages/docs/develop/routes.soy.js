/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from routes.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDevelopRoutesHtml.
 * @public
 */

goog.module('docsDevelopRoutesHtml.incrementaldom');

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
  var param348 = function() {
    ie_open('h1');
      itext('Routes');
    ie_close('h1');
    ie_open('article', null, null,
        'id', 'Routes');
      ie_open('h2');
        itext('Routes');
      ie_close('h2');
      ie_open('p');
        itext('As seen on the previous example, you can register ');
        ie_open('code');
          itext('senna.Route');
        ie_close('code');
        itext(' on ');
        ie_open('code');
          itext('senna.App');
        ie_close('code');
        itext('. A route is a tuple containing a path and a handler function:');
      ie_close('p');
      $templateAlias2({code: 'var route = new senna.Route(\'/path/file.html\', function() {\n  // Fires when a link with path /path/file.html is clicked.\n});', mode: 'text'}, null, opt_ijData);
      ie_open('p');
        itext('The path also supports strings, regular expressions or functions.');
      ie_close('p');
      $templateAlias2({code: 'var route = new senna.Route(/.*/, function() {\n  // Fires when any link is clicked.\n});', mode: 'text'}, null, opt_ijData);
      $templateAlias2({code: 'var resolvePath = function() {\n  return \'/path/file.html\';\n}\nvar route = new senna.Route(resolvePath, function() {\n  // Fires when a link with path /path/file.html is clicked.\n});', mode: 'text'}, null, opt_ijData);
      ie_open('p');
        itext('From the handler callback you can update parts of your page, though it is hard to grow your application from a simple callback like this. For that reason, Senna.js provides ');
        ie_open('code');
          itext('senna.Screen');
        ie_close('code');
        itext('. A screen is nothing more than a special type of route handler that provides an asynchronous lifecycle. The following section will detail how ');
        ie_open('code');
          itext('senna.Screen');
        ie_close('code');
        itext(' can help you manage your surfaces.');
      ie_close('p');
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
  $templateAlias1(soy.$$assignDefaults({content: param348}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDevelopRoutesHtml.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class docsDevelopRoutesHtml extends Component {}
Soy.register(docsDevelopRoutesHtml, templates);
export { docsDevelopRoutesHtml, templates };
export default templates;
/* jshint ignore:end */
