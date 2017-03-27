/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace pageIndex.
 * @public
 */

goog.module('pageIndex.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('main.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param106 = function() {
    $header(opt_data, null, opt_ijData);
    $why(null, null, opt_ijData);
    $highlights(null, null, opt_ijData);
    $start(null, null, opt_ijData);
    $initializing(null, null, opt_ijData);
    $how(null, null, opt_ijData);
    $features(null, null, opt_ijData);
    $footer(null, null, opt_ijData);
  };
  $templateAlias1(soy.$$assignDefaults({content: param106}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'pageIndex.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $header(opt_data, opt_ignored, opt_ijData) {
  ie_open('header', null, null,
      'class', 'header');
    ie_open('div', null, null,
        'class', 'container');
      ie_open('h1', null, null,
          'id', 'header-h1',
          'class', 'header-title');
        var dyn12 = opt_data.site.title;
        if (typeof dyn12 == 'function') dyn12(); else if (dyn12 != null) itext(dyn12);
        ie_open('span');
          itext('.JS');
        ie_close('span');
      ie_close('h1');
      ie_open('h2', null, null,
          'id', 'header-h2',
          'class', 'header-subtitle');
        itext('A blazing fast Single Page Application engine');
      ie_close('h2');
      ie_open('div', null, null,
          'id', 'header-button',
          'class', 'header-cta');
        ie_open('a', null, null,
            'id', 'header-button-download',
            'href', '/docs/',
            'class', 'btn btn-accent');
          ie_void('span', null, null,
              'class', 'icon-16-circle-arrow');
          itext('Get Started');
        ie_close('a');
        ie_open('a', null, null,
            'id', 'header-button-github',
            'href', 'https://github.com/liferay/senna.js/archive/master.zip',
            'class', 'btn btn-default');
          ie_void('span', null, null,
              'class', 'icon-16-download');
          itext('Download');
        ie_close('a');
      ie_close('div');
    ie_close('div');
    ie_open('p', null, null,
        'class', 'gh-btns');
      ie_void('iframe', null, null,
          'src', 'http://ghbtns.com/github-btn.html?user=liferay&repo=senna.js&type=watch&count=true&size=large',
          'allowtransparency', 'true',
          'frameborder', '0',
          'scrolling', '0',
          'width', '150',
          'height', '30');
      ie_void('iframe', null, null,
          'src', 'http://ghbtns.com/github-btn.html?user=liferay&repo=senna.js&type=fork&count=true&size=large',
          'allowtransparency', 'true',
          'frameborder', '0',
          'scrolling', '0',
          'width', '150',
          'height', '30');
    ie_close('p');
  ie_close('header');
}
exports.header = $header;
if (goog.DEBUG) {
  $header.soyTemplateName = 'pageIndex.header';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $why(opt_data, opt_ignored, opt_ijData) {
  ie_open('article', null, null,
      'class', 'about');
    ie_open('div', null, null,
        'class', 'container');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('div', null, null,
            'class', 'col-md-12 col-md-offset-2');
          ie_open('h3', null, null,
              'class', 'about-title');
            itext('Simple Yet Powerful');
          ie_close('h3');
          ie_open('p', null, null,
              'class', 'about-description');
            itext('We built Senna to be a lightweight engine that can turn any static site into a fast and responsive app without adding frameworks or rewriting tons of code.');
          ie_close('p');
          ie_void('p');
        ie_close('div');
      ie_close('div');
    ie_close('div');
  ie_close('article');
}
exports.why = $why;
if (goog.DEBUG) {
  $why.soyTemplateName = 'pageIndex.why';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $highlights(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'container');
    ie_open('section', null, null,
        'class', 'highlight row');
      ie_open('div', null, null,
          'class', 'col-md-6 col-md-offset-2');
        ie_open('h4', null, null,
            'class', 'highlight-title');
          itext('Faster Page Loading');
        ie_close('h4');
        ie_open('p', null, null,
            'class', 'highlight-description');
          itext('Improve user experience and create fluid navigations by preventing unnecessary server roundtrips and page reloads.');
        ie_close('p');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'col-md-6 highlight-graphic');
        ie_void('span', null, null,
            'class', 'icon-16-speedometer');
      ie_close('div');
    ie_close('section');
    ie_open('section', null, null,
        'class', 'highlight row');
      ie_open('div', null, null,
          'class', 'col-md-6 col-md-push-8');
        ie_open('h4', null, null,
            'class', 'highlight-title');
          itext('Reduce Bandwidth');
        ie_close('h4');
        ie_open('p', null, null,
            'class', 'highlight-description');
          itext('By reusing resources like CSS, JavaScript, images, and fonts, you can lower data consumption, which is crucial for mobile.');
        ie_close('p');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'col-md-5 col-md-offset-2 col-md-pull-6 highlight-graphic');
        ie_void('span', null, null,
            'class', 'icon-16-phone');
      ie_close('div');
    ie_close('section');
    ie_open('section', null, null,
        'class', 'highlight row');
      ie_open('div', null, null,
          'class', 'col-md-6 col-md-offset-2');
        ie_open('h4', null, null,
            'class', 'highlight-title');
          itext('Plug and Play');
        ie_close('h4');
        ie_open('p', null, null,
            'class', 'highlight-description');
          itext('No need to switch frameworks. Senna is unobtrusive and can be easily added to your existing HTML or JavaScript.');
        ie_close('p');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'col-md-6 highlight-graphic');
        ie_void('span', null, null,
            'class', 'icon-16-module');
      ie_close('div');
    ie_close('section');
  ie_close('div');
}
exports.highlights = $highlights;
if (goog.DEBUG) {
  $highlights.soyTemplateName = 'pageIndex.highlights';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $start(opt_data, opt_ignored, opt_ijData) {
  ie_open('article', null, null,
      'class', 'about grey-background');
    ie_open('div', null, null,
        'class', 'container');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('div', null, null,
            'class', 'col-md-12 col-md-offset-2');
          ie_open('h3', null, null,
              'class', 'about-title');
            itext('Using Senna');
          ie_close('h3');
          ie_open('p', null, null,
              'class', 'about-description');
            itext('There are two ways to use Senna. One is by leveraging the JavaScript API and the other is by declaring HTML5 data attributes. Below you can see how to quickly get started.');
          ie_close('p');
        ie_close('div');
      ie_close('div');
    ie_close('div');
  ie_close('article');
}
exports.start = $start;
if (goog.DEBUG) {
  $start.soyTemplateName = 'pageIndex.start';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $initializing(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'initializing grey-background');
    ie_open('div', null, null,
        'class', 'container');
      ie_open('section', null, null,
          'class', 'initializing row');
        ie_open('div', null, null,
            'class', 'col-md-12 col-md-offset-2');
          ie_open('h4', null, null,
              'class', 'initializing-title');
            itext('1. Install');
          ie_close('h4');
          ie_open('blockquote', null, null,
              'class', 'blockquote-danger');
            ie_open('p');
              itext('First, you can get it on npm or just use a ');
              ie_open('a', null, null,
                  'id', 'initializing-link',
                  'href', 'http://www.jsdelivr.com/projects/senna.js');
                itext('CDN');
              ie_close('a');
              itext('.');
            ie_close('p');
          ie_close('blockquote');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'col-md-12 col-md-offset-2');
          $templateAlias2({code: 'npm install senna', mode: 'XML/HTML'}, null, opt_ijData);
        ie_close('div');
      ie_close('section');
      ie_open('section', null, null,
          'class', 'initializing row');
        ie_open('div', null, null,
            'class', 'col-md-12 col-md-offset-2');
          ie_open('h4', null, null,
              'class', 'initializing-title');
            itext('2. Include');
          ie_close('h4');
          ie_open('blockquote', null, null,
              'class', 'blockquote-danger');
            ie_open('p');
              itext('Now add the Senna files into your head element.');
            ie_close('p');
          ie_close('blockquote');
          $templateAlias2({code: '<head>\n\t<script src="node_modules/senna/build/globals/senna.js">\n\t<link href="node_modules/senna/build/senna.css" rel="stylesheet">\n</head>', mode: 'XML/HTML'}, null, opt_ijData);
          ie_open('blockquote', null, null,
              'class', 'blockquote-danger');
            ie_open('p');
              itext('Then, initialize it via data attributes and include the loading bar element.');
            ie_close('p');
          ie_close('blockquote');
          $templateAlias2({code: '<body data-senna data-senna-surface>\n\t<div class="senna-loading-bar"></div>\n\t...\t\n</body>', mode: 'XML/HTML'}, null, opt_ijData);
        ie_close('div');
      ie_close('section');
      ie_open('section', null, null,
          'class', 'initializing row');
        ie_open('div', null, null,
            'class', 'col-md-12 col-md-offset-2');
          ie_open('h4', null, null,
              'class', 'initializing-title');
            itext('3. Run');
          ie_close('h4');
          ie_open('blockquote', null, null,
              'class', 'blockquote-danger');
            ie_open('p');
              itext('Finally, navigate through different pages using a slow connection to see how fast it is!');
            ie_close('p');
          ie_close('blockquote');
          ie_open('div', null, null,
              'class', 'header-cta');
            ie_open('a', null, null,
                'href', 'http://sennajs.com/examples/email',
                'class', 'btn btn-accent',
                'target', '_blank');
              ie_void('span');
              itext(' See Live acent');
            ie_close('a');
            ie_open('a', null, null,
                'href', 'https://www.youtube.com/watch?v=1Y05AUglYt0',
                'class', 'btn btn-accent',
                'target', '_blank');
              ie_void('span');
              itext(' Watch Video Comparison');
            ie_close('a');
          ie_close('div');
        ie_close('div');
      ie_close('section');
    ie_close('div');
  ie_close('div');
}
exports.initializing = $initializing;
if (goog.DEBUG) {
  $initializing.soyTemplateName = 'pageIndex.initializing';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $how(opt_data, opt_ignored, opt_ijData) {
  ie_open('article', null, null,
      'class', 'about');
    ie_open('div', null, null,
        'class', 'container');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('div', null, null,
            'class', 'col-md-12 col-md-offset-2');
          ie_open('h3', null, null,
              'class', 'about-title');
            itext('How does it work?');
          ie_close('h3');
          ie_open('p', null, null,
              'class', 'about-description');
            itext('When the user clicks on a link, new content will be dynamically loaded without a page refresh. The application will update the URL to emulate traditional page navigation, but another full page request is never made \u2014 resulting in a much faster user experience.');
          ie_close('p');
        ie_close('div');
      ie_close('div');
    ie_close('div');
  ie_close('article');
}
exports.how = $how;
if (goog.DEBUG) {
  $how.soyTemplateName = 'pageIndex.how';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $features(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'features');
    ie_open('div', null, null,
        'class', 'container');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('section', null, null,
            'class', 'feature col-md-4 col-md-offset-2');
          ie_open('div', null, null,
              'class', 'icon-container');
            ie_open('div', null, null,
                'class', 'feature-icon flex-center-center');
              ie_open('span');
                itext('1');
              ie_close('span');
            ie_close('div');
          ie_close('div');
          ie_open('h3', null, null,
              'class', 'feature-title');
            itext('LOAD');
          ie_close('h3');
          ie_open('p', null, null,
              'class', 'feature-description');
            itext('Your app will fetch all the resources needed on the initial page load and caches them for future use.');
          ie_close('p');
        ie_close('section');
        ie_open('section', null, null,
            'class', 'feature col-md-4');
          ie_open('div', null, null,
              'class', 'icon-container');
            ie_open('div', null, null,
                'class', 'feature-icon flex-center-center');
              ie_open('span');
                itext('2');
              ie_close('span');
            ie_close('div');
          ie_close('div');
          ie_open('h3', null, null,
              'class', 'feature-title');
            itext('NAVIGATE');
          ie_close('h3');
          ie_open('p', null, null,
              'class', 'feature-description');
            itext('When a link is clicked, Senna prevents a full page navigation and starts fetching assets dynamically.');
          ie_close('p');
        ie_close('section');
        ie_open('section', null, null,
            'class', 'feature col-md-4');
          ie_open('div', null, null,
              'class', 'icon-container');
            ie_open('div', null, null,
                'class', 'feature-icon flex-center-center');
              ie_open('span');
                itext('3');
              ie_close('span');
            ie_close('div');
          ie_close('div');
          ie_open('h3', null, null,
              'class', 'feature-title');
            itext('RENDER');
          ie_close('h3');
          ie_open('p', null, null,
              'class', 'feature-description');
            itext('Lastly, Senna updates the URL in the address bar and renders only the new content to the screen.');
          ie_close('p');
        ie_close('section');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.features = $features;
if (goog.DEBUG) {
  $features.soyTemplateName = 'pageIndex.features';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $footer(opt_data, opt_ignored, opt_ijData) {
  ie_open('footer', null, null,
      'class', 'footer');
    ie_open('div', null, null,
        'class', 'container');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('p', null, null,
            'class', 'footer-description col-md-6 col-md-offset-2');
          itext('Brought to you by ');
          ie_open('a', null, null,
              'href', 'https://liferay.com',
              'target', '_blank');
            itext('Liferay, Inc');
          ie_close('a');
        ie_close('p');
        ie_open('p', null, null,
            'class', 'footer-description col-md-6');
          itext('Powered by ');
          ie_open('a', null, null,
              'href', 'http://wedeploy.com',
              'target', '_blank');
            itext('WeDeploy\u2122');
          ie_close('a');
        ie_close('p');
      ie_close('div');
    ie_close('div');
  ie_close('footer');
}
exports.footer = $footer;
if (goog.DEBUG) {
  $footer.soyTemplateName = 'pageIndex.footer';
}

exports.render.params = ["site"];
exports.render.types = {"site":"any"};
exports.header.params = ["site"];
exports.header.types = {"site":"any"};
exports.why.params = [];
exports.why.types = {};
exports.highlights.params = [];
exports.highlights.types = {};
exports.start.params = [];
exports.start.types = {};
exports.initializing.params = [];
exports.initializing.types = {};
exports.how.params = [];
exports.how.types = {};
exports.features.params = [];
exports.features.types = {};
exports.footer.params = [];
exports.footer.types = {};
templates = exports;
return exports;

});

class pageIndex extends Component {}
Soy.register(pageIndex, templates);
export { pageIndex, templates };
export default templates;
/* jshint ignore:end */
