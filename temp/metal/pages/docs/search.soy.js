/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from search.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace pageDocsSearch.
 * @public
 */

goog.module('pageDocsSearch.incrementaldom');

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

var $templateAlias3 = Soy.getTemplate('ElectricSearch.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('Sidebar.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('main.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param223 = function() {
    $templateAlias2({section: opt_data.site.index.children[1]}, null, opt_ijData);
    ie_open('div', null, null,
        'class', 'sidebar-offset');
      ie_open('div', null, null,
          'class', 'container-hybrid docs-home-top');
        ie_open('div', null, null,
            'class', 'row');
          ie_open('div', null, null,
              'class', 'col-xs-16');
            ie_open('h1', null, null,
                'class', 'docs-home-top-title');
              ie_open('span');
                itext('Electric');
              ie_close('span');
              itext(' Docs');
            ie_close('h1');
            ie_open('p', null, null,
                'class', 'docs-home-top-description');
              itext('Start learning how to leverage the power of ');
              var dyn17 = opt_data.site.title;
              if (typeof dyn17 == 'function') dyn17(); else if (dyn17 != null) itext(dyn17);
              itext('.');
            ie_close('p');
          ie_close('div');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'row');
          ie_open('div', null, null,
              'class', 'container-hybrid');
            $templateAlias3({action: '/docs/search.html', path: '/docs/', placeholder: 'Search Docs'}, null, opt_ijData);
          ie_close('div');
        ie_close('div');
      ie_close('div');
    ie_close('div');
  };
  $templateAlias1(soy.$$assignDefaults({elementClasses: 'docs', content: param223}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'pageDocsSearch.render';
}

exports.render.params = ["site"];
exports.render.types = {"site":"any"};
templates = exports;
return exports;

});

class pageDocsSearch extends Component {}
Soy.register(pageDocsSearch, templates);
export { pageDocsSearch, templates };
export default templates;
/* jshint ignore:end */
