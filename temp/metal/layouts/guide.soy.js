/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from guide.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace guide.
 * @public
 */

goog.module('guide.incrementaldom');

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

var $templateAlias4 = Soy.getTemplate('ElectricReadingProgress.incrementaldom', 'render');

var $templateAlias3 = Soy.getTemplate('Sidebar.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('mainGuide.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('topbar.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'main');
    var param39 = function() {
      $templateAlias2(soy.$$assignDefaults({elementClasses: 'topbar-docs-main'}, opt_data), null, opt_ijData);
      $templateAlias3({section: opt_data.site.index.children[1]}, null, opt_ijData);
      $guide(opt_data, null, opt_ijData);
    };
    $templateAlias1(soy.$$assignDefaults({elementClasses: 'guide', content: param39}, opt_data), null, opt_ijData);
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'guide.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $guide(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'sidebar-offset');
    $templateAlias2(opt_data, null, opt_ijData);
    ie_open('header', null, null,
        'class', 'guide-header');
      ie_open('div', null, null,
          'class', 'container-hybrid');
        ie_open('h1', null, null,
            'class', 'title');
          var dyn7 = opt_data.page.title;
          if (typeof dyn7 == 'function') dyn7(); else if (dyn7 != null) itext(dyn7);
          itext(' Guide');
        ie_close('h1');
      ie_close('div');
    ie_close('header');
    ie_open('div', null, null,
        'class', 'container-hybrid');
      ie_open('div', null, null,
          'class', 'docs-guide row');
        ie_open('div', null, null,
            'class', 'docs-content col-xs-16 col-md-9');
          ie_open('div', null, null,
              'class', 'guide-content');
            var dyn8 = opt_data.content;
            if (typeof dyn8 == 'function') dyn8(); else if (dyn8 != null) itext(dyn8);
          ie_close('div');
          if (opt_data.site.githubRepo) {
            $contribute(opt_data, null, opt_ijData);
          }
        ie_close('div');
        ie_open('nav', null, null,
            'class', 'col-xs-16 col-md-offset-2 col-md-5');
          ie_open('div', null, null,
              'class', 'docs-nav-container');
            $templateAlias4({elementClasses: 'docs-nav', offsetTop: 200}, null, opt_ijData);
          ie_close('div');
        ie_close('nav');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.guide = $guide;
if (goog.DEBUG) {
  $guide.soyTemplateName = 'guide.guide';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $contribute(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'contribute');
    ie_open('div', null, null,
        'class', 'contribute-img');
      ie_void('span', null, null,
          'class', 'icon-16-github');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'contribute-text');
      ie_open('p');
        itext('Contribute on Github! ');
        ie_open('a', null, null,
            'href', 'https://github.com/' + opt_data.site.githubRepo + '/tree/master/' + opt_data.page.srcFilePath,
            'class', 'contribute-link',
            'target', '_blank');
          itext('Edit this section');
        ie_close('a');
        itext('.');
      ie_close('p');
    ie_close('div');
  ie_close('div');
}
exports.contribute = $contribute;
if (goog.DEBUG) {
  $contribute.soyTemplateName = 'guide.contribute';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
exports.guide.params = ["page","site","content"];
exports.guide.types = {"page":"any","site":"any","content":"any"};
exports.contribute.params = ["page","site"];
exports.contribute.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class guide extends Component {}
Soy.register(guide, templates);
export { guide, templates };
export default templates;
/* jshint ignore:end */
