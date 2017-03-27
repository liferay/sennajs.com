/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Sidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Sidebar.
 * @hassoydeltemplate {ElectricNavigation.anchor.idom}
 * @public
 */

goog.module('Sidebar.incrementaldom');

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

var $templateAlias2 = Soy.getTemplate('ElectricNavigation.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('ElectricSearchAutocomplete.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('nav', null, null,
      'class', 'sidebar');
    ie_open('a', null, null,
        'class', 'sidebar-header toggler-header-collapsed');
      ie_void('span', null, null,
          'class', 'sidebar-icon icon-16-menu');
      ie_open('span');
        itext('Docs Menu');
      ie_close('span');
      ie_open('span', null, null,
          'class', 'sidebar-icon-right');
        ie_void('span', null, null,
            'class', 'icon-12-arrow-down-short');
        ie_void('span', null, null,
            'class', 'icon-12-arrow-up-short');
      ie_close('span');
    ie_close('a');
    ie_open('div', null, null,
        'class', 'sidebar-toggler-content toggler-collapsed');
      ie_open('div', null, null,
          'class', 'sidebar-search');
        $templateAlias1({maxResults: 3, path: '/docs/', placeholder: 'Search Docs'}, null, opt_ijData);
      ie_close('div');
      $templateAlias2({elementClasses: 'sidebar-list sidebar-list-1', listItemClasses: 'sidebar-item', anchorVariant: 'sidebar', section: opt_data.section}, null, opt_ijData);
    ie_close('div');
  ie_close('nav');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Sidebar.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s163_d34389eb(opt_data, opt_ignored, opt_ijData) {
  ie_open('a', null, null,
      'class', 'sidebar-link ' + (opt_data.page.active ? 'sidebar-link-selected' : ''),
      'href', opt_data.page.url);
    ie_void('span', null, null,
        'class', 'sidebar-icon icon-16-' + opt_data.page.icon);
    ie_open('span');
      var dyn13 = opt_data.page.title;
      if (typeof dyn13 == 'function') dyn13(); else if (dyn13 != null) itext(dyn13);
    ie_close('span');
  ie_close('a');
}
exports.__deltemplate_s163_d34389eb = __deltemplate_s163_d34389eb;
if (goog.DEBUG) {
  __deltemplate_s163_d34389eb.soyTemplateName = 'Sidebar.__deltemplate_s163_d34389eb';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ElectricNavigation.anchor.idom'), 'sidebar', 0, __deltemplate_s163_d34389eb);

exports.render.params = ["section"];
exports.render.types = {"section":"any"};
templates = exports;
return exports;

});

class Sidebar extends Component {}
Soy.register(Sidebar, templates);
export { Sidebar, templates };
export default templates;
/* jshint ignore:end */
