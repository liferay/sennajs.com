/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from soy-post.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace pageBlogFirstPost.
 * @public
 */

goog.module('pageBlogFirstPost.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('blog.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param181 = function() {
    ie_open('section');
      ie_open('p');
        var dyn14 = opt_data.page.description;
        if (typeof dyn14 == 'function') dyn14(); else if (dyn14 != null) itext(dyn14);
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('Lorem ipsum');
        ie_close('strong');
        itext(' dolor sit amet, ');
        ie_open('a', null, null,
            'href', '#');
          itext('consectetur adipiscing elit');
        ie_close('a');
        itext(', sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ');
        ie_open('em');
          itext('ullamco');
        ie_close('em');
        itext(' laboris nisi ut aliquip ');
        ie_open('strike');
          itext('ex');
        ie_close('strike');
        itext(' ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
      ie_close('p');
      ie_open('blockquote');
        itext('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');
      ie_close('blockquote');
      ie_open('p');
        itext('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', 'https://cloud.githubusercontent.com/assets/19154228/21908369/559710ce-d8c8-11e6-9987-9622306f1a77.png',
            'alt', 'Lorem Ipsum');
        ie_close('img');
      ie_close('figure');
      ie_open('p');
        itext('At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.');
      ie_close('p');
    ie_close('section');
  };
  $templateAlias1(soy.$$assignDefaults({content: param181}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'pageBlogFirstPost.render';
}

exports.render.params = ["page"];
exports.render.types = {"page":"any"};
templates = exports;
return exports;

});

class pageBlogFirstPost extends Component {}
Soy.register(pageBlogFirstPost, templates);
export { pageBlogFirstPost, templates };
export default templates;
/* jshint ignore:end */
