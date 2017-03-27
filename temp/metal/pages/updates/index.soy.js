/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace updatesIndex.
 * @hassoydeltemplate {ElectricUpdates.feature.idom}
 * @public
 */

goog.module('updatesIndex.incrementaldom');

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

var $templateAlias2 = Soy.getTemplate('ElectricUpdates.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('main.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param237 = function() {
    ie_open('div', null, null,
        'class', 'updates');
      ie_open('header', null, null,
          'class', 'header');
        ie_open('div', null, null,
            'class', 'container');
          ie_open('h1', null, null,
              'class', 'header-title');
            itext('Updates');
          ie_close('h1');
          ie_open('h1', null, null,
              'class', 'header-subtitle');
            itext('Check out what\'s new bellow.');
          ie_close('h1');
        ie_close('div');
      ie_close('header');
      $templateAlias2({updates: opt_data.page.updates, featureVariant: 'sennajs'}, null, opt_ijData);
    ie_close('div');
  };
  $templateAlias1(soy.$$assignDefaults({content: param237}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'updatesIndex.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s244_ae620309(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'col-xs-16 col-sm-16 update-feature');
    ie_open('div', null, null,
        'class', 'feature-topper');
      ie_void('span', null, null,
          'class', 'feature-icon icon-16-' + opt_data.feature.icon);
      ie_open('h1', null, null,
          'class', 'feature-header');
        var dyn18 = opt_data.feature.title;
        if (typeof dyn18 == 'function') dyn18(); else if (dyn18 != null) itext(dyn18);
        itext(' ');
      ie_close('h1');
      ie_open('h3', null, null,
          'class', 'feature-author');
        itext('Released by ');
      ie_close('h3');
      ie_open('a', null, null,
          'href', 'https://github.com/eduardolundgren',
          'target', '_blank',
          'class', 'feature-author-name');
        itext('Eduardo Lundgren');
      ie_close('a');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'feature-content');
      ie_open('p', null, null,
          'class', 'feature-lead');
        var dyn19 = opt_data.feature.description;
        if (typeof dyn19 == 'function') dyn19(); else if (dyn19 != null) itext(dyn19);
      ie_close('p');
      ie_open('div', null, null,
          'class', 'read-more');
        ie_open('a', null, null,
            'href', opt_data.feature.url,
            'target', '_blank');
          itext('Read more...');
        ie_close('a');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.__deltemplate_s244_ae620309 = __deltemplate_s244_ae620309;
if (goog.DEBUG) {
  __deltemplate_s244_ae620309.soyTemplateName = 'updatesIndex.__deltemplate_s244_ae620309';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ElectricUpdates.feature.idom'), 'sennajs', 0, __deltemplate_s244_ae620309);

exports.render.params = ["page"];
exports.render.types = {"page":"any"};
templates = exports;
return exports;

});

class updatesIndex extends Component {}
Soy.register(updatesIndex, templates);
export { updatesIndex, templates };
export default templates;
/* jshint ignore:end */
