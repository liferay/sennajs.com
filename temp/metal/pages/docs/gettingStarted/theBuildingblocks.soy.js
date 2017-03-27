/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from theBuildingblocks.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsGettingStartedTheBuildingblocksHtml.
 * @public
 */

goog.module('docsGettingStartedTheBuildingblocksHtml.incrementaldom');

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
  var param298 = function() {
    ie_open('h1');
      itext('The Building Blocks');
    ie_close('h1');
    ie_open('article', null, null,
        'id', 'App');
      ie_open('h2');
        itext('App');
      ie_close('h2');
      ie_open('p');
        itext('Think of this as your canvas. Everything about your site, namely your surfaces and routes, are contained within in this element.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'Surfaces');
      ie_open('h2');
        itext('Surfaces');
      ie_close('h2');
      ie_open('p');
        itext('The basic visual building blocks of your page. They are elements like your header, navbar, body, or footer.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'Screen');
      ie_open('h2');
        itext('Screen');
      ie_close('h2');
      ie_open('p');
        itext('The specific rendering of all relevant surfaces. Every-time a page is requested, the navigated path will match a respective screen. This matching screen will scan all surfaces and paint the new content for those surfaces. Every screen has a unique url, but does not load as a separate page.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'Route');
      ie_open('h2');
        itext('Route');
      ie_close('h2');
      ie_open('p');
        itext('Every app navigation will consist of a route and a correlating screen. The route is the entire process of navigation, from when you click a link to when your app paints the new information on the screen.');
      ie_close('p');
    ie_close('article');
    ie_open('h1');
      itext('Native Browser Behavior');
    ie_close('h1');
    ie_open('article', null, null,
        'id', 'seo');
      ie_open('h6');
        itext('In order to create a single page application with good perceived latency and good user experience, the SPA engine must handle many aspects of the browser\u2019s native behavior. Here are some of the amazing capabilities of Senna.js.');
      ie_close('h6');
      ie_open('h2');
        itext('SEO & Bookmarkability:');
      ie_close('h2');
      ie_open('p');
        itext('So if the browser is simply gathering more information rather than refreshing to a separate page, how do you make sure that your users can bookmark and share the content they are viewing? With Senna.js, your app will create specific urls that correlate to the information that your users are viewing. This not only makes it seamless for your users, but it also enables search engines to index that same information just like it would if it was a traditional webpage.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'hybrid-rendering');
      ie_open('h2');
        itext('Hybrid Rendering:');
      ie_close('h2');
      ie_open('p');
        itext('Ajax + server-side rendering allows you to disable pushState at any time, enabling progressive enhancement. The way you render the server-side does not matter, it can be simple HTML fragments or even template views.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'state-retention');
      ie_open('h2');
        itext('State Retention:');
      ie_close('h2');
      ie_open('p');
        itext('When you reload or navigate through the history of the page, Senna will take you right back to the state of the screen that you previously viewed, including the same scroll placement.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'ui-feedback');
      ie_open('h2');
        itext('UI Feedback:');
      ie_close('h2');
      ie_open('p');
        itext('If you have large content on your page and it takes time to load, you can give your users feedback so they know the content will be fully loaded soon. Checkout ');
        ie_open('a', null, null,
            'href', '/docs/features/uiFeedback.html');
          itext('UI Feedback');
        ie_close('a');
        itext(' to learn how to enable this feature in your app.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'pending-nav');
      ie_open('h2');
        itext('Pending Navigation:');
      ie_close('h2');
      ie_open('p');
        itext('To prevent multiple portions of your site from loading at different speeds, you can block UI rendering until the data is fully loaded so that all the content will display at once. In this situation, UI Feedback is a great tool to make sure your users know the content is coming.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'timeout');
      ie_open('h2');
        itext('Timeout Detection:');
      ie_close('h2');
      ie_open('p');
        itext('Senna.js will timeout if the request takes too long to load or if the user navigates to a different link while another request is pending. If an error occurs, Senna is already setup with ');
        ie_open('a', null, null,
            'href', '/docs/features/errorHandling.html');
          itext('Error Handling');
        ie_close('a');
        itext('.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'history-nav');
      ie_open('h2');
        itext('History Navigation:');
      ie_close('h2');
      ie_open('p');
        itext('By using History API, you can manipulate the browser history to use the browser\'s back and forward buttons.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'cacheable-screens');
      ie_open('h2');
        itext('Cacheable Screens:');
      ie_close('h2');
      ie_open('p');
        itext('Once you load a certain surface, this content is cached in memory and will be retrieved later on without any additional request to the server.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'prm');
      ie_open('h2');
        itext('Page Resources Management:');
      ie_close('h2');
      ie_open('p');
        itext('Evaluate scripts and stylesheets from dynamic loaded resources. Additional content loaded using XMLHttpRequest can be appended to the DOM. For security reasons some browsers will not evaluate ');
        ie_open('code');
          itext('<script>');
        ie_close('code');
        itext(' tags from the new fragment, so the SPA engine should handle extracting scripts from the content and parsing them, respecting the browser contract for loading scripts.');
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
  $templateAlias1(soy.$$assignDefaults({content: param298}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsGettingStartedTheBuildingblocksHtml.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class docsGettingStartedTheBuildingblocksHtml extends Component {}
Soy.register(docsGettingStartedTheBuildingblocksHtml, templates);
export { docsGettingStartedTheBuildingblocksHtml, templates };
export default templates;
/* jshint ignore:end */
