/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from gettingStarted.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace docsGettingStartedGettingStartedHtml.
 * @public
 */

goog.module('docsGettingStartedGettingStartedHtml.incrementaldom');

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
  var param256 = function() {
    ie_open('h1');
      itext('Installing Senna');
    ie_close('h1');
    ie_open('article', null, null,
        'id', 'getting-the-project');
      ie_open('h2');
        itext('Getting the Project');
      ie_close('h2');
      ie_open('p');
        itext('To get started, ');
        ie_open('a', null, null,
            'href', 'https://github.com/liferay/senna.js/archive/master.zip');
          itext('download the project');
        ie_close('a');
        itext('. This project includes an initial version of the project plus all of the Senna.js examples (source code dependencies that will help you get started).');
      ie_close('p');
      ie_open('p');
        itext('Unzip the project somewhere on your local drive. While you\'re working, you\'ll need a basic HTTP server to serve your pages because Senna will not be able to fully run if you simply open the files of your app in a browser. If you already have a local server ready to run, then skip to the ');
        ie_open('a', null, null,
            'href', '#start-using');
          itext('Start using Senna.js in your app');
        ie_close('a');
        itext('.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'http-server');
      ie_open('h2');
        itext('Setting up a local server');
      ie_close('h2');
      ie_open('p');
        itext('If you don\'t already have a server, ');
        ie_open('a', null, null,
            'href', 'https://www.npmjs.com/package/http-server',
            'target', '_blank');
          itext('http-server');
        ie_close('a');
        itext(' is a great solution. The easiest way to install ');
        ie_open('code');
          itext('http-server');
        ie_close('code');
        itext(' is via npm by running the following command in the command line.');
      ie_close('p');
      $templateAlias2({code: 'npm install http-server -g', mode: 'text'}, null, opt_ijData);
      ie_open('p');
        itext('This will install ');
        ie_open('code');
          itext('http-server');
        ie_close('code');
        itext('. To run your local server, go to the directory that contains your app and run:');
      ie_close('p');
      $templateAlias2({code: 'http-server', mode: 'text'}, null, opt_ijData);
      ie_open('p');
        itext('Your app is now live at ');
        ie_open('a', null, null,
            'href', 'http://localhost:8080',
            'target', '_blank');
          itext('http://localhost:8080');
        ie_close('a');
        itext('.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', 'start-using');
      ie_open('h2');
        itext('Start using Senna.js in your app');
      ie_close('h2');
      ie_open('p');
        itext('Setting up Senna.js is as easy as linking Senna.js to your document and adding ');
        ie_open('code');
          itext('data-senna');
        ie_close('code');
        itext(' and ');
        ie_open('code');
          itext('data-senna-surface');
        ie_close('code');
        itext(' as attributes to your ');
        ie_open('code');
          itext('<body>');
        ie_close('code');
        itext(' element.');
      ie_close('p');
      $templateAlias2({code: '<!doctype html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>Turbolinks</title>\n  <link rel="shortcut icon" href="http://sennajs.com/images/favicon.ico">\n  <!-- Link Senna to document -->\n  <script src="../../build/globals/senna-debug.js"><\/script>\n</head>\n  <!-- Add Senna attributes -->\n<body data-senna data-senna-surface>\n  <!-- Senna surface -->\n    <a href="/pages/page1.html">Page 1</a>\n    <a href="/pages/page2.html">Page 2</a>\n  <!-- End of Senna surface -->\n</body>\n</html>', mode: 'text'}, null, opt_ijData);
      ie_open('p');
        itext('Now your page is already faster! By adding ');
        ie_open('code');
          itext('data-senna');
        ie_close('code');
        itext(' and ');
        ie_open('code');
          itext('data-senna-surface');
        ie_close('code');
        itext(', we are telling the browser to replace just the body on each navigation and keep the rest of the resources instead of completly reloading a new page.');
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
  $templateAlias1(soy.$$assignDefaults({content: param256}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'docsGettingStartedGettingStartedHtml.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class docsGettingStartedGettingStartedHtml extends Component {}
Soy.register(docsGettingStartedGettingStartedHtml, templates);
export { docsGettingStartedGettingStartedHtml, templates };
export default templates;
/* jshint ignore:end */
