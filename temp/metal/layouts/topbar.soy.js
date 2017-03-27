/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from topbar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace topbar.
 * @public
 */

goog.module('topbar.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('ElectricNavigation.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('nav', null, null,
      'class', 'topbar topbar-light ' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    $logo(opt_data, null, opt_ijData);
    $menu(opt_data, null, opt_ijData);
  ie_close('nav');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'topbar.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $logo(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'topbar-logo');
    ie_open('a', null, null,
        'class', 'topbar-logo-link',
        'href', '/');
      ie_open('span', null, null,
          'class', 'name');
        var dyn11 = opt_data.site.title;
        if (typeof dyn11 == 'function') dyn11(); else if (dyn11 != null) itext(dyn11);
        ie_open('span');
          itext('.js');
        ie_close('span');
      ie_close('span');
      ie_open('span', null, null,
          'class', 'by');
        itext('by Liferay');
      ie_close('span');
    ie_close('a');
  ie_close('div');
}
exports.logo = $logo;
if (goog.DEBUG) {
  $logo.soyTemplateName = 'topbar.logo';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $menu(opt_data, opt_ignored, opt_ijData) {
  $templateAlias1({depth: 1, elementClasses: 'topbar-list', linkClasses: 'topbar-link', listItemClasses: 'topbar-item', section: opt_data.site.index}, null, opt_ijData);
}
exports.menu = $menu;
if (goog.DEBUG) {
  $menu.soyTemplateName = 'topbar.menu';
}

exports.render.params = ["elementClasses","site"];
exports.render.types = {"elementClasses":"any","site":"any"};
exports.logo.params = ["site"];
exports.logo.types = {"site":"any"};
exports.menu.params = ["site"];
exports.menu.types = {"site":"any"};
templates = exports;
return exports;

});

class topbar extends Component {}
Soy.register(topbar, templates);
export { topbar, templates };
export default templates;
/* jshint ignore:end */
