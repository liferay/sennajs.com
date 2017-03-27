/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from howdoesitwork.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsGettingStartedHowdoesitworkHtml.
 * @public
 */

goog.module('docsGettingStartedHowdoesitworkHtml.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('guide.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param280 = function() {
    ie_open('h1');
      itext('How Does It Work?');
    ie_close('h1');
    ie_open('article', null, null,
        'id', 'step1');
      ie_open('h2');
        itext('1. Initial page load');
      ie_close('h2');
      ie_open('p');
        itext('When using Senna.js, your app will load all the background content, like css and script files, on the initial page load. They will be cached and used to speed up future navigation.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'step2');
      ie_open('h2');
        itext('2. User clicks link to another page');
      ie_close('h2');
      ie_open('p');
        itext('When the user clicks a link to another page of your app, Senna.js begins to work its magic, first by populating a new URL even though the page did not fully reload. Everything feels normal to your user because Senna.js supports the ');
        ie_open('a', null, null,
            'href', '/docs/intro/capabilities.html');
          itext('native browser capabilities');
        ie_close('a');
        itext('.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'step3');
      ie_open('h2');
        itext('3. Request is made for matching screen');
      ie_close('h2');
      ie_open('p');
        itext('The request is made for the new page but instead of pulling down a completely new package of elements from the server, Senna.js utilizes the cached resources that are redundant to both the pages.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'step4');
      ie_open('h2');
        itext('4. Screen paints surfaces with new content');
      ie_close('h2');
      ie_open('p');
        itext('Quickly, Senna.js finds what content is new to the requested page and paints only the new content to the screen\'s surfaces, preventing your site from wasting time and bandwidth to download redundant resources.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'thateasy');
      ie_open('h2');
        itext('And voil\u00E0! Your app is now blazing fast!');
      ie_close('h2');
      ie_open('p');
        itext('Not only is Senna.js a powerful, easy-to-use tool, it also provides plenty of control so you can tailor it to your project. Keep reading through the docs to learn more about how you can leverage the power of Senna.js in your app.');
      ie_close('p');
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
  $templateAlias1(soy.$$assignDefaults({content: param280}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsGettingStartedHowdoesitworkHtml.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class docsGettingStartedHowdoesitworkHtml extends Component {}
Soy.register(docsGettingStartedHowdoesitworkHtml, templates);
export { docsGettingStartedHowdoesitworkHtml, templates };
export default templates;
/* jshint ignore:end */
