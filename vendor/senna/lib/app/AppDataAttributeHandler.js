'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = require('metal');

var _dataAttributes = require('./dataAttributes');

var _dataAttributes2 = _interopRequireDefault(_dataAttributes);

var _globals = require('../globals/globals');

var _globals2 = _interopRequireDefault(_globals);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _HtmlScreen = require('../screen/HtmlScreen');

var _HtmlScreen2 = _interopRequireDefault(_HtmlScreen);

var _Route = require('../route/Route');

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppDataAttributeHandler = function (_Disposable) {
	_inherits(AppDataAttributeHandler, _Disposable);

	/**
  * Initilizes App, register surfaces and routes from data attributes.
  * @constructor
  */

	function AppDataAttributeHandler() {
		_classCallCheck(this, AppDataAttributeHandler);

		/**
   * Holds the app reference initialized by data attributes.
   * @type {App}
   * @default null
   */

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppDataAttributeHandler).call(this));

		_this.app = null;

		/**
   * Holds the base element to search initialization data attributes. This
   * element is the container used to enable initialization based on the
   * presence of `data-senna` attribute.
   * @type {Element}
   * @default null
   */
		_this.baseElement = null;
		return _this;
	}

	/**
  * Inits application based on information scanned from document.
  */


	_createClass(AppDataAttributeHandler, [{
		key: 'handle',
		value: function handle() {
			if (!_metal.core.isElement(this.baseElement)) {
				throw new Error('Senna data attribute handler base element ' + 'not set or invalid, try setting a valid element that ' + 'contains a `data-senna` attribute.');
			}

			if (!this.baseElement.hasAttribute(_dataAttributes2.default.senna)) {
				console.log('Senna was not initialized from data attributes. ' + 'In order to enable its usage from data attributes try setting ' + 'in the base element, e.g. `<body data-senna>`.');
				return;
			}

			if (this.app) {
				throw new Error('Senna app was already initialized.');
			}

			console.log('Senna initialized from data attribute.');

			this.app = new _App2.default();
			this.maybeAddRoutes_();
			this.maybeAddSurfaces_();
			this.maybeSetBasePath_();
			this.maybeSetLinkSelector_();
			this.maybeSetLoadingCssClass_();
			this.maybeSetUpdateScrollPosition_();
			this.maybeDispatch_();
		}

		/**
   * Disposes of this instance's object references.
   * @override
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			if (this.app) {
				this.app.dispose();
			}
		}

		/**
   * Gets the app reference.
   * @return {App}
   */

	}, {
		key: 'getApp',
		value: function getApp() {
			return this.app;
		}

		/**
   * Gets the base element.
   * @return {Element} baseElement
   */

	}, {
		key: 'getBaseElement',
		value: function getBaseElement() {
			return this.baseElement;
		}

		/**
   * Maybe adds app routes from link elements that are `senna-route`.
   */

	}, {
		key: 'maybeAddRoutes_',
		value: function maybeAddRoutes_() {
			var _this2 = this;

			var routesSelector = 'link[rel="senna-route"]';
			this.querySelectorAllAsArray_(routesSelector).forEach(function (link) {
				return _this2.maybeParseLinkRoute_(link);
			});
			if (!this.app.hasRoutes()) {
				this.app.addRoutes(new _Route2.default(/.*/, _HtmlScreen2.default));
				console.log('Senna can\'t find route elements, adding default.');
			}
		}

		/**
   * Maybe adds app surfaces by scanning `data-senna-surface` data attribute.
   */

	}, {
		key: 'maybeAddSurfaces_',
		value: function maybeAddSurfaces_() {
			var _this3 = this;

			var surfacesSelector = '[' + _dataAttributes2.default.surface + ']';
			this.querySelectorAllAsArray_(surfacesSelector).forEach(function (surfaceElement) {
				_this3.updateElementIdIfSpecialSurface_(surfaceElement);
				_this3.app.addSurfaces(surfaceElement.id);
			});
		}

		/**
   * Dispatches app navigation to the current path when initializes.
   */

	}, {
		key: 'maybeDispatch_',
		value: function maybeDispatch_() {
			if (this.baseElement.hasAttribute(_dataAttributes2.default.dispatch)) {
				this.app.dispatch();
			}
		}

		/**
   * Adds app route by parsing valid link elements. A valid link element is of
   * the kind `rel="senna-route"`.
   * @param {Element} link
   */

	}, {
		key: 'maybeParseLinkRoute_',
		value: function maybeParseLinkRoute_(link) {
			var route = new _Route2.default(this.maybeParseLinkRoutePath_(link), this.maybeParseLinkRouteHandler_(link));
			this.app.addRoutes(route);
			console.log('Senna scanned route ' + route.getPath());
		}

		/**
   * Maybe parse link route handler.
   * @param {Element} link
   * @return {?string}
   */

	}, {
		key: 'maybeParseLinkRouteHandler_',
		value: function maybeParseLinkRouteHandler_(link) {
			var handler = link.getAttribute('type');
			if (_metal.core.isDefAndNotNull(handler)) {
				handler = _metal.object.getObjectByName(handler);
			}
			return handler;
		}

		/**
   * Maybe parse link route path.
   * @param {Element} link
   * @return {?string}
   */

	}, {
		key: 'maybeParseLinkRoutePath_',
		value: function maybeParseLinkRoutePath_(link) {
			var path = link.getAttribute('href');
			if (_metal.core.isDefAndNotNull(path)) {
				if (path.indexOf('regex:') === 0) {
					path = new RegExp(path.substring(6));
				}
			}
			return path;
		}

		/**
   * Maybe sets app base path from `data-senna-base-path` data attribute.
   */

	}, {
		key: 'maybeSetBasePath_',
		value: function maybeSetBasePath_() {
			var basePath = this.baseElement.getAttribute(_dataAttributes2.default.basePath);
			if (_metal.core.isDefAndNotNull(basePath)) {
				this.app.setBasePath(basePath);
				console.log('Senna scanned base path ' + basePath);
			}
		}

		/**
   * Maybe sets app link selector from `data-senna-link-selector` data
   * attribute.
   */

	}, {
		key: 'maybeSetLinkSelector_',
		value: function maybeSetLinkSelector_() {
			var linkSelector = this.baseElement.getAttribute(_dataAttributes2.default.linkSelector);
			if (_metal.core.isDefAndNotNull(linkSelector)) {
				this.app.setLinkSelector(linkSelector);
				console.log('Senna scanned link selector ' + linkSelector);
			}
		}

		/**
   * Maybe sets app link loading css class from `data-senna-loading-css-class`
   * data attribute.
   */

	}, {
		key: 'maybeSetLoadingCssClass_',
		value: function maybeSetLoadingCssClass_() {
			var loadingCssClass = this.baseElement.getAttribute(_dataAttributes2.default.loadingCssClass);
			if (_metal.core.isDefAndNotNull(loadingCssClass)) {
				this.app.setLoadingCssClass(loadingCssClass);
				console.log('Senna scanned loading css class ' + loadingCssClass);
			}
		}

		/**
   * Maybe sets app update scroll position from
   * `data-senna-update-scroll-position` data attribute.
   */

	}, {
		key: 'maybeSetUpdateScrollPosition_',
		value: function maybeSetUpdateScrollPosition_() {
			var updateScrollPosition = this.baseElement.getAttribute(_dataAttributes2.default.updateScrollPosition);
			if (_metal.core.isDefAndNotNull(updateScrollPosition)) {
				if (updateScrollPosition === 'false') {
					this.app.setUpdateScrollPosition(false);
				} else {
					this.app.setUpdateScrollPosition(true);
				}
				console.log('Senna scanned update scroll position ' + updateScrollPosition);
			}
		}

		/**
   * Queries elements from document and returns an array of elements.
   * @param {!string} selector
   * @return {array.<Element>}
   */

	}, {
		key: 'querySelectorAllAsArray_',
		value: function querySelectorAllAsArray_(selector) {
			return Array.prototype.slice.call(_globals2.default.document.querySelectorAll(selector));
		}

		/**
   * Updates element id if handled as special surface element. Some surfaces
   * are slightly different from others, like when threating <code>body</code>
   * as surface.
   * @param {Element} element
   */

	}, {
		key: 'updateElementIdIfSpecialSurface_',
		value: function updateElementIdIfSpecialSurface_(element) {
			if (!element.id && element === _globals2.default.document.body) {
				element.id = 'senna_surface_' + _metal.core.getUid();
			}
		}

		/**
   * Sets the base element.
   * @param {Element} baseElement
   */

	}, {
		key: 'setBaseElement',
		value: function setBaseElement(baseElement) {
			this.baseElement = baseElement;
		}
	}]);

	return AppDataAttributeHandler;
}(_metal.Disposable);

exports.default = AppDataAttributeHandler;