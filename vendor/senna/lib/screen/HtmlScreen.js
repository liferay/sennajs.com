'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _metal = require('metal');

var _metalDom = require('metal-dom');

var _metalPromise = require('metal-promise');

var _metalPromise2 = _interopRequireDefault(_metalPromise);

var _globals = require('../globals/globals');

var _globals2 = _interopRequireDefault(_globals);

var _RequestScreen2 = require('./RequestScreen');

var _RequestScreen3 = _interopRequireDefault(_RequestScreen2);

var _Surface = require('../surface/Surface');

var _Surface2 = _interopRequireDefault(_Surface);

var _metalUseragent = require('metal-useragent');

var _metalUseragent2 = _interopRequireDefault(_metalUseragent);

var _metalUri = require('metal-uri');

var _metalUri2 = _interopRequireDefault(_metalUri);

var _utils = require('../utils/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HtmlScreen = function (_RequestScreen) {
	_inherits(HtmlScreen, _RequestScreen);

	/**
  * Screen class that perform a request and extracts surface contents from
  * the response content.
  * @constructor
  * @extends {RequestScreen}
  */

	function HtmlScreen() {
		_classCallCheck(this, HtmlScreen);

		/**
   * Holds the title selector. Relevant to extract the <code><title></code>
   * element from request fragments to use as the screen title.
   * @type {!string}
   * @default title
   * @protected
   */

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HtmlScreen).call(this));

		_this.titleSelector = 'title';
		return _this;
	}

	/**
  * @inheritDoc
  */


	_createClass(HtmlScreen, [{
		key: 'activate',
		value: function activate() {
			_get(Object.getPrototypeOf(HtmlScreen.prototype), 'activate', this).call(this);
			this.releaseVirtualDocument();
			this.pendingStyles = null;
		}

		/**
   * Allocates virtual document for content. After allocated virtual document
   * can be accessed by <code>this.virtualDocument</code>.
   * @param {!string} htmlString
   */

	}, {
		key: 'allocateVirtualDocumentForContent',
		value: function allocateVirtualDocumentForContent(htmlString) {
			if (!this.virtualDocument) {
				this.virtualDocument = _globals2.default.document.createElement('html');
			}

			this.copyNodeAttributesFromContent_(htmlString, this.virtualDocument);

			this.virtualDocument.innerHTML = htmlString;
		}

		/**
   * Customizes logic to append styles into document. Relevant to when
   * tracking a style by id make sure to re-positions the new style in the
   * same dom order.
   * @param {Element} newStyle
   */

	}, {
		key: 'appendStyleIntoDocument_',
		value: function appendStyleIntoDocument_(newStyle) {
			var isTemporaryStyle = _metalDom.dom.match(newStyle, HtmlScreen.selectors.stylesTemporary);
			if (isTemporaryStyle) {
				this.pendingStyles.push(newStyle);
				if (_metalUseragent2.default.isIe && newStyle.href) {
					newStyle.href = new _metalUri2.default(newStyle.href).makeUnique().toString();
				}
			}
			if (newStyle.id) {
				var styleInDoc = _globals2.default.document.getElementById(newStyle.id);
				if (styleInDoc) {
					styleInDoc.parentNode.insertBefore(newStyle, styleInDoc.nextSibling);
					return;
				}
			}
			_globals2.default.document.head.appendChild(newStyle);
		}

		/**
   * If body is used as surface forces the requested documents to have same id
   * of the initial page.
   */

	}, {
		key: 'assertSameBodyIdInVirtualDocument',
		value: function assertSameBodyIdInVirtualDocument() {
			var bodySurface = this.virtualDocument.querySelector('body');
			if (!_globals2.default.document.body.id) {
				_globals2.default.document.body.id = 'senna_surface_' + _metal.core.getUid();
			}
			if (bodySurface) {
				bodySurface.id = _globals2.default.document.body.id;
			}
		}

		/**
   * Copies attributes from the <html> tag of content to the given node.
   */

	}, {
		key: 'copyNodeAttributesFromContent_',
		value: function copyNodeAttributesFromContent_(content, node) {
			content = content.replace(/[<]\s*html/ig, '<senna');
			content = content.replace(/\/html\s*\>/ig, '/senna>');
			node.innerHTML = content;
			var placeholder = node.querySelector('senna');
			if (placeholder) {
				_utils2.default.clearNodeAttributes(node);
				_utils2.default.copyNodeAttributes(placeholder, node);
			}
		}

		/**
   * @Override
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.disposePendingStyles();
			_get(Object.getPrototypeOf(HtmlScreen.prototype), 'disposeInternal', this).call(this);
		}

		/**
   * Disposes pending styles if screen get disposed prior to its loading.
   */

	}, {
		key: 'disposePendingStyles',
		value: function disposePendingStyles() {
			if (this.pendingStyles) {
				this.pendingStyles.forEach(function (style) {
					return _metalDom.dom.exitDocument(style);
				});
			}
		}

		/**
   * @Override
   */

	}, {
		key: 'evaluateScripts',
		value: function evaluateScripts(surfaces) {
			var _this2 = this;

			var evaluateTrackedScripts = this.evaluateTrackedResources_(_metalDom.globalEval.runScriptsInElement, HtmlScreen.selectors.scripts, HtmlScreen.selectors.scriptsTemporary, HtmlScreen.selectors.scriptsPermanent);

			return evaluateTrackedScripts.then(function () {
				return _get(Object.getPrototypeOf(HtmlScreen.prototype), 'evaluateScripts', _this2).call(_this2, surfaces);
			});
		}

		/**
   * @Override
   */

	}, {
		key: 'evaluateStyles',
		value: function evaluateStyles(surfaces) {
			var _this3 = this;

			this.pendingStyles = [];
			var evaluateTrackedStyles = this.evaluateTrackedResources_(_metalDom.globalEvalStyles.runStylesInElement, HtmlScreen.selectors.styles, HtmlScreen.selectors.stylesTemporary, HtmlScreen.selectors.stylesPermanent, this.appendStyleIntoDocument_.bind(this));

			return evaluateTrackedStyles.then(function () {
				return _get(Object.getPrototypeOf(HtmlScreen.prototype), 'evaluateStyles', _this3).call(_this3, surfaces);
			});
		}

		/**
   * Evaluates tracked resources inside incoming fragment and remove existing
   * temporary resources.
   * @param {?function()} appendFn Function to append the node into document.
   * @param {!string} selector Selector used to find resources to track.
   * @param {!string} selectorTemporary Selector used to find temporary
   *     resources to track.
   * @param {!string} selectorPermanent Selector used to find permanent
   *     resources to track.
   * @param {!function} opt_appendResourceFn Optional function used to
   *     evaluate fragment containing resources.
   * @return {CancellablePromise} Deferred that waits resources evaluation to
   *     complete.
   * @private
   */

	}, {
		key: 'evaluateTrackedResources_',
		value: function evaluateTrackedResources_(evaluatorFn, selector, selectorTemporary, selectorPermanent, opt_appendResourceFn) {
			var _this4 = this;

			var tracked = this.virtualQuerySelectorAll_(selector);
			var temporariesInDoc = this.querySelectorAll_(selectorTemporary);
			var permanentsInDoc = this.querySelectorAll_(selectorPermanent);

			// Adds permanent resources in document to cache.
			permanentsInDoc.forEach(function (resource) {
				var resourceKey = _this4.getResourceKey_(resource);
				if (resourceKey) {
					HtmlScreen.permanentResourcesInDoc[resourceKey] = true;
				}
			});

			var frag = _metalDom.dom.buildFragment();
			tracked.forEach(function (resource) {
				var resourceKey = _this4.getResourceKey_(resource);
				// Do not load permanent resources if already in document.
				if (!HtmlScreen.permanentResourcesInDoc[resourceKey]) {
					frag.appendChild(resource);
				}
				// If resource has key and is permanent add to cache.
				if (resourceKey && _metalDom.dom.match(resource, selectorPermanent)) {
					HtmlScreen.permanentResourcesInDoc[resourceKey] = true;
				}
			});

			return new _metalPromise2.default(function (resolve) {
				evaluatorFn(frag, function () {
					temporariesInDoc.forEach(function (resource) {
						return _metalDom.dom.exitDocument(resource);
					});
					resolve();
				}, opt_appendResourceFn);
			});
		}

		/**
   * @Override
   */

	}, {
		key: 'flip',
		value: function flip(surfaces) {
			var _this5 = this;

			return _get(Object.getPrototypeOf(HtmlScreen.prototype), 'flip', this).call(this, surfaces).then(function () {
				_utils2.default.clearNodeAttributes(document.documentElement);
				_utils2.default.copyNodeAttributes(_this5.virtualDocument, document.documentElement);
			});
		}

		/**
   * Extracts a key to identify the resource based on its attributes.
   * @param {Element} resource
   * @return {string} Extracted key based on resource attributes in order of
   *     preference: id, href, src.
   */

	}, {
		key: 'getResourceKey_',
		value: function getResourceKey_(resource) {
			return resource.id || resource.href || resource.src || '';
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'getSurfaceContent',
		value: function getSurfaceContent(surfaceId) {
			var surface = this.virtualDocument.querySelector('#' + surfaceId);
			if (surface) {
				var defaultChild = surface.querySelector('#' + surfaceId + '-' + _Surface2.default.DEFAULT);
				if (defaultChild) {
					return defaultChild.innerHTML;
				}
				return surface.innerHTML; // If default content not found, use surface content
			}
		}

		/**
   * Gets the title selector.
   * @return {!string}
   */

	}, {
		key: 'getTitleSelector',
		value: function getTitleSelector() {
			return this.titleSelector;
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'load',
		value: function load(path) {
			var _this6 = this;

			return _get(Object.getPrototypeOf(HtmlScreen.prototype), 'load', this).call(this, path).then(function (content) {
				_this6.allocateVirtualDocumentForContent(content);
				_this6.resolveTitleFromVirtualDocument();
				_this6.assertSameBodyIdInVirtualDocument();
				return content;
			});
		}

		/**
   * Queries elements from virtual document and returns an array of elements.
   * @param {!string} selector
   * @return {array.<Element>}
   */

	}, {
		key: 'virtualQuerySelectorAll_',
		value: function virtualQuerySelectorAll_(selector) {
			return Array.prototype.slice.call(this.virtualDocument.querySelectorAll(selector));
		}

		/**
   * Queries elements from document and returns an array of elements.
   * @param {!string} selector
   * @return {array.<Element>}
   */

	}, {
		key: 'querySelectorAll_',
		value: function querySelectorAll_(selector) {
			return Array.prototype.slice.call(_globals2.default.document.querySelectorAll(selector));
		}

		/**
   * Releases virtual document allocated for content.
   */

	}, {
		key: 'releaseVirtualDocument',
		value: function releaseVirtualDocument() {
			this.virtualDocument = null;
		}

		/**
   * Resolves title from allocated virtual document.
   */

	}, {
		key: 'resolveTitleFromVirtualDocument',
		value: function resolveTitleFromVirtualDocument() {
			var title = this.virtualDocument.querySelector(this.titleSelector);
			if (title) {
				this.setTitle(title.innerHTML.trim());
			}
		}

		/**
   * Sets the title selector.
   * @param {!string} titleSelector
   */

	}, {
		key: 'setTitleSelector',
		value: function setTitleSelector(titleSelector) {
			this.titleSelector = titleSelector;
		}
	}]);

	return HtmlScreen;
}(_RequestScreen3.default);

/**
 * Helper selectors for tracking resources.
 * @type {object}
 * @protected
 * @static
 */


HtmlScreen.selectors = {
	scripts: 'script[data-senna-track]',
	scriptsPermanent: 'script[data-senna-track="permanent"]',
	scriptsTemporary: 'script[data-senna-track="temporary"]',
	styles: 'style[data-senna-track],link[data-senna-track]',
	stylesPermanent: 'style[data-senna-track="permanent"],link[data-senna-track="permanent"]',
	stylesTemporary: 'style[data-senna-track="temporary"],link[data-senna-track="temporary"]'
};

/**
 * Caches permanent resource keys.
 * @type {object}
 * @protected
 * @static
 */
HtmlScreen.permanentResourcesInDoc = {};

exports.default = HtmlScreen;