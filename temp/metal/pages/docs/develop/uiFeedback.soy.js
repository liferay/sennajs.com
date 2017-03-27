/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from uiFeedback.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDevelopUiFeedbackHtml.
 * @public
 */

goog.module('docsDevelopUiFeedbackHtml.incrementaldom');

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
  var param385 = function() {
    ie_open('h1');
      itext('UI Feedback');
    ie_close('h1');
    ie_open('article', null, null,
        'id', 'default-ui-feedback');
      ie_open('h6');
        itext('If you have large content on your page and it takes time to load, you can give your users feedback so they know the content is coming.');
      ie_close('h6');
      ie_open('h2');
        itext('1. Add UI Feedback');
      ie_close('h2');
      ie_open('p');
        itext('Senna comes with working UI feedback straight out of the box. All you have to do is add ');
        ie_open('code');
          itext('<div class="senn-loading-bar"></div>');
        ie_close('code');
        itext(' to the top of your ');
        ie_open('code');
          itext('<body>');
        ie_close('code');
        itext('.');
      ie_close('p');
      $templateAlias2({code: '<!doctype html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>UI Feedback</title>\n    <link rel="shortcut icon" href="http://sennajs.com/images/favicon.ico">\n    <script src="../../build/globals/senna-debug.js"><\/script>\n  </head>\n  <body data-senna data-senna-surface>\n    <!-- Add Senna UI Feedback -->\n    <div class="senn-loading-bar"></div>\n    <!-- Body content -->\n  </body>\n</html>', mode: 'text'}, null, opt_ijData);
    ie_close('article');
    ie_open('article', null, null,
        'id', 'customize-feedback');
      ie_open('h2');
        itext('2. Customize using CSS');
      ie_close('h2');
      ie_open('p');
        itext('Now that you have added the default UI Feedback, you can edit the style of the animation inside of ');
        ie_open('code');
          itext('senna/src/senna.css');
        ie_close('code');
        itext('.');
      ie_close('p');
      $templateAlias2({code: '.senna-loading .senna-loading-bar {\n  animation: shift-rightwards 1s ease-in-out infinite;\n  animation-delay: .4s;\n  display: block;\n}\n\n.senna-loading-bar {\n  transform: translateX(100%);\n  \n  /* Change color of feedback bar */\n  background: #2fa4f5;\n\n  display: none;\n  height: 2px;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 10000;\n}', mode: 'text'}, null, opt_ijData);
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
  $templateAlias1(soy.$$assignDefaults({content: param385}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDevelopUiFeedbackHtml.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class docsDevelopUiFeedbackHtml extends Component {}
Soy.register(docsDevelopUiFeedbackHtml, templates);
export { docsDevelopUiFeedbackHtml, templates };
export default templates;
/* jshint ignore:end */
