/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from trackableResources.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsDevelopTrackableResourcesHtml.
 * @public
 */

goog.module('docsDevelopTrackableResourcesHtml.incrementaldom');

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
  var param371 = function() {
    ie_open('h1');
      itext('Trackable Resources');
    ie_close('h1');
    ie_open('article', null, null,
        'id', 'trackable-resources');
      ie_open('h2');
        itext('Trackable Resources');
      ie_close('h2');
      ie_open('p');
        itext('Senna.js provides an easy way to manage external style and script resources on the page. When including resources in the ');
        ie_open('code');
          itext('<head>');
        ie_close('code');
        itext(', they can be annotated with the ');
        ie_open('code');
          itext('data-senna-track');
        ie_close('code');
        itext(' attribute. This attribute can be set to ');
        ie_open('code');
          itext('temporary');
        ie_close('code');
        itext(' or ');
        ie_open('code');
          itext('permanent');
        ie_close('code');
        itext(', which determines whether a resource remains on the page permanently or is removed after navigation;');
      ie_close('p');
      $templateAlias2({code: '<link data-senna-track="permanent" href="main.css" rel="stylesheet">\n<script data-senna-track="temporary" src="main.js"><\/script>', mode: 'text'}, null, opt_ijData);
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
  $templateAlias1(soy.$$assignDefaults({content: param371}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsDevelopTrackableResourcesHtml.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class docsDevelopTrackableResourcesHtml extends Component {}
Soy.register(docsDevelopTrackableResourcesHtml, templates);
export { docsDevelopTrackableResourcesHtml, templates };
export default templates;
/* jshint ignore:end */
