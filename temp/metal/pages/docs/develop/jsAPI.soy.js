/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from jsAPI.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDevelopJsApiHtml.
 * @public
 */

goog.module('docsDevelopJsApiHtml.incrementaldom');

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
  var param330 = function() {
    ie_open('h1');
      itext('JavaScript APIs');
    ie_close('h1');
    ie_open('article', null, null,
        'id', 'js-api');
      ie_open('h2');
        itext('Full control using JavaScript APIs');
      ie_close('h2');
      ie_open('p');
        itext('It\'s easy to create your own screen whenever you want.');
      ie_close('p');
      ie_open('p');
        itext('Let\'s say for example that you need a screen that injects the content "Header changed" and "Body changed" on the respective surface elements when you navigate to the path ');
        ie_open('code');
          itext('/foo');
        ie_close('code');
        itext('.');
      ie_close('p');
      $templateAlias2({code: 'function FooScreen() {\n  FooScreen.base(this, \'constructor\');\n}\nsenna.inherits(FooScreen, senna.Screen);\n\nFooScreen.prototype.cached = true;\n\nFooScreen.prototype.getSurfaceContent = function(surfaceId) {\n  switch(surfaceId) {\n    case \'header\':\n      return \'Header changed\';\n    case \'body\':\n      return \'Body changed\';\n  }\n};', mode: 'text'}, null, opt_ijData);
      $templateAlias2({code: '<!doctype html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>Senna - hello</title>\n  <!-- Senna optional styles -->\n  <link rel="stylesheet" href="../build/senna.css">\n  <!-- Senna -->\n  <script src="../build/senna-debug.js"><\/script>\n</head>\n<body>\n  <!-- Content surface -->\n  <div id="header">\n    Header\n  </div>\n  <div id="body">\n    Body\n  </div>\n  <!-- End of content surface -->\n  <script>\n    var app = new senna.App();\n    app.addSurfaces([\'header\', \'body\']);\n    app.addRoutes(new senna.Route(\'/foo\', FooScreen));\n  <\/script>\n</body>\n</html>', mode: 'html'}, null, opt_ijData);
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
  $templateAlias1(soy.$$assignDefaults({content: param330}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDevelopJsApiHtml.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class docsDevelopJsApiHtml extends Component {}
Soy.register(docsDevelopJsApiHtml, templates);
export { docsDevelopJsApiHtml, templates };
export default templates;
/* jshint ignore:end */
