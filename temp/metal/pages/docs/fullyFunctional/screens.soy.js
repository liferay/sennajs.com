/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from screens.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsFullyFunctionalScreensHtml.
 * @public
 */

goog.module('docsFullyFunctionalScreensHtml.incrementaldom');

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
  var param432 = function() {
    ie_open('h1');
      itext('Screens');
    ie_close('h1');
    ie_open('article', null, null,
        'id', 'senna.HTMLScreen');
      ie_open('h2');
        itext('Senna.HTMLScreen');
      ie_close('h2');
      ie_open('p');
        itext('Senna.js provides a special type of route handler, or interface, called ');
        ie_open('code');
          itext('senna.Screen');
        ie_close('code');
        itext('. This in itself is not an active class, rather, it merely defines the screen interface methods and demonstrates how to use the API. The real magic happens when we extend ');
        ie_open('code');
          itext('senna.Screen');
        ie_close('code');
        itext('.');
      ie_close('p');
      ie_open('p');
        itext('We knew this might be a little tricky at first, so we creating our own extention: ');
        ie_open('code');
          itext('senna.HTMLScreen');
        ie_close('code');
        itext('- the default screen we created to make Senna.js ready to work straight out of the box.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'senna.ScreenToWork');
      ie_open('h2');
        itext('How can you put Senna.HTMLScreen to work?');
      ie_close('h2');
      ie_open('p');
        itext('We designed Senna to use ');
        ie_open('code');
          itext('senna.HTMLScreen');
        ie_close('code');
        itext(' as the default extension for all navigation so you can start using Senna without worrying about changing anything in your back end. But how do I start setting up my screens with ');
        ie_open('code');
          itext('senna.HTMLScreen');
        ie_close('code');
        itext('? That\'s the thing, you already did!');
      ie_close('p');
      ie_open('p');
        itext('When you added ');
        ie_open('code');
          itext('data-senna');
        ie_close('code');
        itext(' and ');
        ie_open('code');
          itext('data-senna-surface');
        ie_close('code');
        itext(' to your document (see ');
        ie_open('a', null, null,
            'href', '/docs/intro/gettingStarted.html');
          itext('Getting Started');
        ie_close('a');
        itext('), you told senna to route all the navigations through ');
        ie_open('code');
          itext('senna.HTMLScreen');
        ie_close('code');
        itext('.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'moreScreens');
      ie_open('h2');
        itext('Screens, screens, and more screens');
      ie_close('h2');
      ie_open('p');
        itext('We want you to know how Senna works so that you can fully trust it to empower your app. Bellow are the cycle logs for senna.Screen. Feel free to look at them or even inspect your own browser console during a link navigation using Senna.');
      ie_close('p');
      ie_open('p');
        itext('You can also jump to ');
        ie_open('a', null, null,
            'href', '/docs/fullyFunctional/controllingSurfaces.html');
          itext('Controlling Surfaces');
        ie_close('a');
        itext(' to learn more about how to customize screens on your app.');
      ie_close('p');
      $templateAlias2({code: 'Navigate to [/examples/mysite/pages/page1.html]\nCreate screen for [/examples/mysite/pages/page1.html]\nScreen [screen_1408572719183] load\nXHR finished loading: GET "http://localhost:8000/examples/mysite/pages/page1.html".\nScreen [screen_1408572719183] add content to surface [header]\nScreen [screen_1408572719183] add content to surface [content]\nScreen [screen_1408572719183] flip\nScreen [screen_1408572719183] activate\nNavigation done', mode: 'text'}, null, opt_ijData);
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
  $templateAlias1(soy.$$assignDefaults({content: param432}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsFullyFunctionalScreensHtml.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class docsFullyFunctionalScreensHtml extends Component {}
Soy.register(docsFullyFunctionalScreensHtml, templates);
export { docsFullyFunctionalScreensHtml, templates };
export default templates;
/* jshint ignore:end */
