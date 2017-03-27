/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from controllingSurfaces.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsFullyFunctionalControllingSurfacesHtml.
 * @public
 */

goog.module('docsFullyFunctionalControllingSurfacesHtml.incrementaldom');

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
  var param404 = function() {
    ie_open('h1');
      itext('Controlling Surfaces');
    ie_close('h1');
    ie_open('article', null, null,
        'id', 'data-attributes-explained');
      ie_open('h2');
        itext('How do you make sure Senna does exactly what you want?');
      ie_close('h2');
      ie_open('p');
        itext('By default, Senna is setup to route every link to ');
        ie_open('code');
          itext('senna.HTMLScreen');
        ie_close('code');
        itext('- the out-of-the-box screen that senna provides to handle navigation so you don\'t have to change anything in your existing back end.');
      ie_close('p');
      ie_open('p');
        itext('For most situations, this will be the ideal use of Senna because it is smart enough to know how to paint your surfaces with the new information when you navigate.');
      ie_close('p');
      ie_open('p');
        itext('But what if you want Senna to only be active during certain navigations? We make it easy for you to control what screens of your app interact with Senna and which ones do not. We call this ');
        ie_open('a', null, null,
            'href', '#taking-control');
          itext('Controlling Data Attributes');
        ie_close('a');
        itext('.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'taking-control');
      ie_open('h2');
        itext('Taking control of your surfaces');
      ie_close('h2');
      ie_open('p');
        itext('Once you have Senna fully running (see ');
        ie_open('a', null, null,
            'href', '/docs/intro/gettingStarted.html');
          itext('Getting Started');
        ie_close('a');
        itext(' if you are not sure), you can choose to limit Senna by controlling the data attributes.');
      ie_close('p');
      ie_open('p');
        itext('In order to limit your whole app from routing through ');
        ie_open('code');
          itext('senna.HTMLScreen');
        ie_close('code');
        itext(', you can add ');
        ie_open('code');
          itext('<link rel="senna-route">');
        ie_close('code');
        itext(' to the ');
        ie_open('code');
          itext('head');
        ie_close('code');
        itext(' of your document. This will tell Senna to ');
        ie_open('strong');
          itext('only');
        ie_close('strong');
        itext(' route your specified paths through ');
        ie_open('code');
          itext('senna.HTMLScreen');
        ie_close('code');
        itext('. Your document would look like this:');
      ie_close('p');
      $templateAlias2({code: '<!doctype html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>Senna - blazing fast apps</title>\n  <link rel="stylesheet" href="../build/senna.css">\n    <!-- Controlling Data Attributes -->\n  <link rel="senna-route" href="/examplePage1.html" type="senna.HtmlScreen">\n  <script src="../build/senna-debug.js"><\/script>\n</head>\n<body data-senna>\n  <a href="/pages/examplePage1.html">Page 1</a>\n  <a href="/pages/examplePage2.html">Page 2</a>\n  <div id="my-awesome-surface" data-senna-surface>\n    <p>Default content of my website.</p>\n  </div>\n</body>\n</html>', mode: 'text'}, null, opt_ijData);
      ie_open('p');
        itext('You can also use ');
        ie_open('a', null, null,
            'href', 'https://en.wikipedia.org/wiki/Regular_expression',
            'target', '_blank');
          itext('RegEx');
        ie_close('a');
        itext(' to select multiple paths with one string.');
      ie_close('p');
      $templateAlias2({code: '<link rel="senna-route" href="examplePage1.html" type="senna.HtmlScreen">\n<link rel="senna-route" href="regex:examplePage[1-9].html" type="senna.HtmlScreen">', mode: 'text'}, null, opt_ijData);
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
  $templateAlias1(soy.$$assignDefaults({content: param404}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsFullyFunctionalControllingSurfacesHtml.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class docsFullyFunctionalControllingSurfacesHtml extends Component {}
Soy.register(docsFullyFunctionalControllingSurfacesHtml, templates);
export { docsFullyFunctionalControllingSurfacesHtml, templates };
export default templates;
/* jshint ignore:end */
