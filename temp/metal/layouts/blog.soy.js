/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from blog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace blog.
 * @public
 */

goog.module('blog.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('main.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var param3 = function() {
    ie_open('div', null, null,
        'class', 'blog');
      $mainPost(opt_data, null, opt_ijData);
      $olderPosts(opt_data, null, opt_ijData);
    ie_close('div');
  };
  $templateAlias1(soy.$$assignDefaults({content: param3}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'blog.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $mainPost(opt_data, opt_ignored, opt_ijData) {
  ie_open('article', null, null,
      'class', 'container');
    ie_open('header');
      ie_open('small');
        itext('By ');
        var dyn0 = opt_data.page.author;
        if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
        itext(' ');
        ie_open('span');
          itext('| ');
          var dyn1 = opt_data.page.date;
          if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
        ie_close('span');
      ie_close('small');
      ie_open('h3');
        var dyn2 = opt_data.page.title;
        if (typeof dyn2 == 'function') dyn2(); else if (dyn2 != null) itext(dyn2);
      ie_close('h3');
    ie_close('header');
    ie_open('div', null, null,
        'class', 'content');
      var dyn3 = opt_data.content;
      if (typeof dyn3 == 'function') dyn3(); else if (dyn3 != null) itext(dyn3);
    ie_close('div');
  ie_close('article');
}
exports.mainPost = $mainPost;
if (goog.DEBUG) {
  $mainPost.soyTemplateName = 'blog.mainPost';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $olderPosts(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'posts-list');
    ie_open('div', null, null,
        'class', 'container');
      var childPageList32 = opt_data.site.index.children[0].children;
      var childPageListLen32 = childPageList32.length;
      for (var childPageIndex32 = 0; childPageIndex32 < childPageListLen32; childPageIndex32++) {
        var childPageData32 = childPageList32[childPageIndex32];
        if (opt_data.page.url != childPageData32.url) {
          ie_open('div', null, null,
              'class', 'post-item container-blog');
            ie_open('a', null, null,
                'class', 'post-item__link',
                'href', childPageData32.url);
              ie_open('small');
                itext('By ');
                var dyn4 = childPageData32.author;
                if (typeof dyn4 == 'function') dyn4(); else if (dyn4 != null) itext(dyn4);
                itext(' ');
                ie_open('span');
                  itext('| ');
                  var dyn5 = childPageData32.date;
                  if (typeof dyn5 == 'function') dyn5(); else if (dyn5 != null) itext(dyn5);
                ie_close('span');
              ie_close('small');
              ie_open('h4', null, null,
                  'class', 'post-item__title');
                var dyn6 = childPageData32.title;
                if (typeof dyn6 == 'function') dyn6(); else if (dyn6 != null) itext(dyn6);
              ie_close('h4');
            ie_close('a');
          ie_close('div');
        }
      }
    ie_close('div');
  ie_close('div');
}
exports.olderPosts = $olderPosts;
if (goog.DEBUG) {
  $olderPosts.soyTemplateName = 'blog.olderPosts';
}

exports.render.params = [];
exports.render.types = {};
exports.mainPost.params = ["content","page"];
exports.mainPost.types = {"content":"any","page":"any"};
exports.olderPosts.params = ["page","site"];
exports.olderPosts.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class blog extends Component {}
Soy.register(blog, templates);
export { blog, templates };
export default templates;
/* jshint ignore:end */
