'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _metal = require('metal');

var _metalDom = require('metal-dom');

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalPromise = require('metal-promise');

var _metalPromise2 = _interopRequireDefault(_metalPromise);

var _metalEvents = require('metal-events');

var _utils = require('../utils/utils');

var _utils2 = _interopRequireDefault(_utils);

var _globals = require('../globals/globals');

var _globals2 = _interopRequireDefault(_globals);

var _Route = require('../route/Route');

var _Route2 = _interopRequireDefault(_Route);

var _Screen = require('../screen/Screen');

var _Screen2 = _interopRequireDefault(_Screen);

var _Surface = require('../surface/Surface');

var _Surface2 = _interopRequireDefault(_Surface);

var _metalUri = require('metal-uri');

var _metalUri2 = _interopRequireDefault(_metalUri);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_EventEmitter) {
	_inherits(App, _EventEmitter);

	/**
  * App class that handle routes and screens lifecycle.
  * @constructor
  * @extends {EventEmitter}
  */

	function App() {
		_classCallCheck(this, App);

		/**
   * Holds the active screen.
   * @type {?Screen}
   * @protected
   */

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

		_this.activeScreen = null;

		/**
   * Holds the active path containing the query parameters.
   * @type {?string}
   * @protected
   */
		_this.activePath = null;

		/**
   * Allows prevent navigate from dom prevented event.
   * @type {boolean}
   * @default true
   * @protected
   */
		_this.allowPreventNavigate = true;

		/**
   * Holds link base path.
   * @type {!string}
   * @default ''
   * @protected
   */
		_this.basePath = '';

		/**
   * Captures scroll position from scroll event.
   * @type {!boolean}
   * @default true
   * @protected
   */
		_this.captureScrollPositionFromScrollEvent = true;

		/**
   * Holds the default page title.
   * @type {string}
   * @default null
   * @protected
   */
		_this.defaultTitle = _globals2.default.document.title;

		/**
   * Holds the form selector to define forms that are routed.
   * @type {!string}
   * @default form[enctype="multipart/form-data"]:not([data-senna-off])
   * @protected
   */
		_this.formSelector = 'form[enctype="multipart/form-data"]:not([data-senna-off])';

		/**
   * Holds the link selector to define links that are routed.
   * @type {!string}
   * @default a:not([data-senna-off])
   * @protected
   */
		_this.linkSelector = 'a:not([data-senna-off])';

		/**
   * Holds the loading css class.
   * @type {!string}
   * @default senna-loading
   * @protected
   */
		_this.loadingCssClass = 'senna-loading';

		/**
   * Using the History API to manage your URLs is awesome and, as it happens,
   * a crucial feature of good web apps. One of its downsides, however, is
   * that scroll positions are stored and then, more importantly, restored
   * whenever you traverse the history. This often means unsightly jumps as
   * the scroll position changes automatically, and especially so if your app
   * does transitions, or changes the contents of the page in any way.
   * Ultimately this leads to an horrible user experience. The good news is,
   * however, that there’s a potential fix: history.scrollRestoration.
   * https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
   * @type {boolean}
   * @protected
   */
		_this.nativeScrollRestorationSupported = 'scrollRestoration' in _globals2.default.window.history;

		/**
   * Holds a deferred with the current navigation.
   * @type {?CancellablePromise}
   * @default null
   * @protected
   */
		_this.pendingNavigate = null;

		/**
   * Holds the window horizontal scroll position when the navigation using
   * back or forward happens to be restored after the surfaces are updated.
   * @type {!Number}
   * @default 0
   * @protected
   */
		_this.popstateScrollLeft = 0;

		/**
   * Holds the window vertical scroll position when the navigation using
   * back or forward happens to be restored after the surfaces are updated.
   * @type {!Number}
   * @default 0
   * @protected
   */
		_this.popstateScrollTop = 0;

		/**
   * Holds the redirect path containing the query parameters.
   * @type {?string}
   * @protected
   */
		_this.redirectPath = null;

		/**
   * Holds the screen routes configuration.
   * @type {?Array}
   * @default []
   * @protected
   */
		_this.routes = [];

		/**
   * Maps the screen instances by the url containing the parameters.
   * @type {?Object}
   * @default {}
   * @protected
   */
		_this.screens = {};

		/**
   * When set to true the first erroneous popstate fired on page load will be
   * ignored, only if <code>globals.window.history.state</code> is also
   * <code>null</code>.
   * @type {boolean}
   * @default false
   * @protected
   */
		_this.skipLoadPopstate = false;

		/**
   * Maps that index the surfaces instances by the surface id.
   * @type {?Object}
   * @default {}
   * @protected
   */
		_this.surfaces = {};

		/**
   * When set to true, moves the scroll position after popstate, or to the
   * top of the viewport for new navigation. If false, the browser will
   * take care of scroll restoration.
   * @type {!boolean}
   * @default true
   * @protected
   */
		_this.updateScrollPosition = true;

		_this.appEventHandlers_ = new _metalEvents.EventHandler();

		_this.appEventHandlers_.add(_metalDom2.default.on(_globals2.default.window, 'scroll', _this.onScroll_.bind(_this)), _metalDom2.default.on(_globals2.default.window, 'load', _this.onLoad_.bind(_this)), _metalDom2.default.on(_globals2.default.window, 'popstate', _this.onPopstate_.bind(_this)));

		_this.on('startNavigate', _this.onStartNavigate_);
		_this.on('beforeNavigate', _this.onBeforeNavigate_);
		_this.on('beforeNavigate', _this.onBeforeNavigateDefault_, true);

		_this.setLinkSelector(_this.linkSelector);
		_this.setFormSelector(_this.formSelector);
		return _this;
	}

	/**
  * Adds one or more screens to the application.
  *
  * Example:
  *
  * <code>
  *   app.addRoutes({ path: '/foo', handler: FooScreen });
  *   or
  *   app.addRoutes([{ path: '/foo', handler: function(route) { return new FooScreen(); } }]);
  * </code>
  *
  * @param {Object} or {Array} routes Single object or an array of object.
  *     Each object should contain <code>path</code> and <code>screen</code>.
  *     The <code>path</code> should be a string or a regex that maps the
  *     navigation route to a screen class definition (not an instance), e.g:
  *         <code>{ path: "/home:param1", handler: MyScreen }</code>
  *         <code>{ path: /foo.+/, handler: MyScreen }</code>
  * @chainable
  */


	_createClass(App, [{
		key: 'addRoutes',
		value: function addRoutes(routes) {
			var _this2 = this;

			if (!Array.isArray(routes)) {
				routes = [routes];
			}
			routes.forEach(function (route) {
				if (!(route instanceof _Route2.default)) {
					route = new _Route2.default(route.path, route.handler);
				}
				_this2.routes.push(route);
			});
			return this;
		}

		/**
   * Adds one or more surfaces to the application.
   * @param {Surface|String|Array.<Surface|String>} surfaces
   *     Surface element id or surface instance. You can also pass an Array
   *     whichcontains surface instances or id. In case of ID, these should be
   *     the id of surface element.
   * @chainable
   */

	}, {
		key: 'addSurfaces',
		value: function addSurfaces(surfaces) {
			var _this3 = this;

			if (!Array.isArray(surfaces)) {
				surfaces = [surfaces];
			}
			surfaces.forEach(function (surface) {
				if (_metal.core.isString(surface)) {
					surface = new _Surface2.default(surface);
				}
				_this3.surfaces[surface.getId()] = surface;
			});
			return this;
		}

		/**
   * Returns if can navigate to path.
   * @param {!string} url
   * @return {boolean}
   */

	}, {
		key: 'canNavigate',
		value: function canNavigate(url) {
			var path = _utils2.default.getUrlPath(url);
			var uri = new _metalUri2.default(url);

			if (!this.isLinkSameOrigin_(uri.getHostname())) {
				console.log('Offsite link clicked');
				return false;
			}
			if (!this.isSameBasePath_(path)) {
				console.log('Link clicked outside app\'s base path');
				return false;
			}
			if (!this.findRoute(path)) {
				console.log('No route for ' + path);
				return false;
			}

			return true;
		}

		/**
   * Clear screens cache.
   * @chainable
   */

	}, {
		key: 'clearScreensCache',
		value: function clearScreensCache() {
			var _this4 = this;

			Object.keys(this.screens).forEach(function (path) {
				if (path === _this4.activePath) {
					_this4.activeScreen.clearCache();
				} else {
					_this4.removeScreen(path);
				}
			});
		}

		/**
   * Retrieves or create a screen instance to a path.
   * @param {!string} path Path containing the querystring part.
   * @return {Screen}
   */

	}, {
		key: 'createScreenInstance',
		value: function createScreenInstance(path, route) {
			if (!this.pendingNavigate && path === this.activePath) {
				console.log('Already at destination, refresh navigation');
				return this.activeScreen;
			}
			/* jshint newcap: false */
			var screen = this.screens[path];
			if (!screen) {
				var handler = route.getHandler();
				if (handler === _Screen2.default || _Screen2.default.isImplementedBy(handler.prototype)) {
					screen = new handler();
				} else {
					screen = handler(route) || new _Screen2.default();
				}
				console.log('Create screen for [' + path + '] [' + screen + ']');
			}
			return screen;
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			if (this.activeScreen) {
				this.removeScreen(this.activePath);
			}
			this.clearScreensCache();
			this.formEventHandler_.removeListener();
			this.linkEventHandler_.removeListener();
			this.appEventHandlers_.removeAllListeners();
			_get(Object.getPrototypeOf(App.prototype), 'disposeInternal', this).call(this);
		}

		/**
   * Dispatches to the first route handler that matches the current path, if
   * any.
   * @return {CancellablePromise} Returns a pending request cancellable promise.
   */

	}, {
		key: 'dispatch',
		value: function dispatch() {
			return this.navigate(_utils2.default.getCurrentBrowserPath(), true);
		}

		/**
   * Starts navigation to a path.
   * @param {!string} path Path containing the querystring part.
   * @param {boolean=} opt_replaceHistory Replaces browser history.
   * @return {CancellablePromise} Returns a pending request cancellable promise.
   */

	}, {
		key: 'doNavigate_',
		value: function doNavigate_(path, opt_replaceHistory) {
			var _this5 = this;

			if (this.activeScreen && this.activeScreen.beforeDeactivate()) {
				this.pendingNavigate = _metalPromise2.default.reject(new _metalPromise2.default.CancellationError('Cancelled by active screen'));
				return this.pendingNavigate;
			}

			var route = this.findRoute(path);
			if (!route) {
				this.pendingNavigate = _metalPromise2.default.reject(new _metalPromise2.default.CancellationError('No route for ' + path));
				return this.pendingNavigate;
			}

			console.log('Navigate to [' + path + ']');

			this.stopPendingNavigate_();

			var nextScreen = this.createScreenInstance(path, route);

			return nextScreen.load(path).then(function () {
				if (_this5.activeScreen) {
					_this5.activeScreen.deactivate();
				}
				_this5.prepareNavigateHistory_(path, nextScreen, opt_replaceHistory);
				_this5.prepareNavigateSurfaces_(nextScreen, _this5.surfaces);
			}).then(function () {
				return nextScreen.evaluateStyles(_this5.surfaces);
			}).then(function () {
				return nextScreen.flip(_this5.surfaces);
			}).then(function () {
				return nextScreen.evaluateScripts(_this5.surfaces);
			}).then(function () {
				return _this5.syncScrollPositionSyncThenAsync_();
			}).then(function () {
				return _this5.finalizeNavigate_(path, nextScreen);
			}).catch(function (reason) {
				_this5.handleNavigateError_(path, nextScreen, reason);
				throw reason;
			});
		}

		/**
   * Finalizes a screen navigation.
   * @param {!string} path Path containing the querystring part.
   * @param {!Screen} nextScreen
   * @protected
   */

	}, {
		key: 'finalizeNavigate_',
		value: function finalizeNavigate_(path, nextScreen) {
			nextScreen.activate();

			if (this.activeScreen && !this.activeScreen.isCacheable()) {
				if (this.activeScreen !== nextScreen) {
					this.removeScreen(this.activePath);
				}
			}

			this.activePath = path;
			this.activeScreen = nextScreen;
			this.screens[path] = nextScreen;
			this.pendingNavigate = null;
			_globals2.default.capturedFormElement = null;
			console.log('Navigation done');
		}

		/**
   * Finds a route for the test path. Returns true if matches has a route,
   * otherwise returns null.
   * @param {!string} path Path containing the querystring part.
   * @return {?Object} Route handler if match any or <code>null</code> if the
   *     path is the same as the current url and the path contains a fragment.
   */

	}, {
		key: 'findRoute',
		value: function findRoute(path) {
			// Prevents navigation if it's a hash change on the same url.
			if (path.lastIndexOf('#') > -1 && _utils2.default.isCurrentBrowserPath(path)) {
				return null;
			}

			path = _utils2.default.getUrlPathWithoutHash(path);

			// Makes sure that the path substring will be in the expected format
			// (that is, will end with a "/").
			path = _utils2.default.getUrlPathWithoutHash(path.substr(this.basePath.length));

			for (var i = 0; i < this.routes.length; i++) {
				var route = this.routes[i];
				if (route.matchesPath(path)) {
					return route;
				}
			}

			return null;
		}

		/**
   * Gets allow prevent navigate.
   * @return {boolean}
   */

	}, {
		key: 'getAllowPreventNavigate',
		value: function getAllowPreventNavigate() {
			return this.allowPreventNavigate;
		}

		/**
   * Gets link base path.
   * @return {!string}
   */

	}, {
		key: 'getBasePath',
		value: function getBasePath() {
			return this.basePath;
		}

		/**
   * Gets the default page title.
   * @return {string} defaultTitle
   */

	}, {
		key: 'getDefaultTitle',
		value: function getDefaultTitle() {
			return this.defaultTitle;
		}

		/**
   * Gets the form selector.
   * @return {!string}
   */

	}, {
		key: 'getFormSelector',
		value: function getFormSelector() {
			return this.formSelector;
		}

		/**
   * Gets the link selector.
   * @return {!string}
   */

	}, {
		key: 'getLinkSelector',
		value: function getLinkSelector() {
			return this.linkSelector;
		}

		/**
   * Gets the loading css class.
   * @return {!string}
   */

	}, {
		key: 'getLoadingCssClass',
		value: function getLoadingCssClass() {
			return this.loadingCssClass;
		}

		/**
   * Gets the update scroll position value.
   * @return {boolean}
   */

	}, {
		key: 'getUpdateScrollPosition',
		value: function getUpdateScrollPosition() {
			return this.updateScrollPosition;
		}

		/**
   * Handle navigation error.
   * @param {!string} path Path containing the querystring part.
   * @param {!Screen} nextScreen
   * @param {!Error} error
   * @protected
   */

	}, {
		key: 'handleNavigateError_',
		value: function handleNavigateError_(path, nextScreen, err) {
			console.log('Navigation error for [' + nextScreen + '] (' + err + ')');
			if (!_utils2.default.isCurrentBrowserPath(path)) {
				this.removeScreen(path);
			}
		}

		/**
   * Checks if app has routes.
   * @return {boolean}
   */

	}, {
		key: 'hasRoutes',
		value: function hasRoutes() {
			return this.routes.length > 0;
		}

		/**
   * Tests if hostname is an offsite link.
   * @param {!string} hostname Link hostname to compare with
   *     <code>globals.window.location.hostname</code>.
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'isLinkSameOrigin_',
		value: function isLinkSameOrigin_(hostname) {
			return hostname === _globals2.default.window.location.hostname;
		}

		/**
   * Tests if link element has the same app's base path.
   * @param {!string} path Link path containing the querystring part.
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'isSameBasePath_',
		value: function isSameBasePath_(path) {
			return path.indexOf(this.basePath) === 0;
		}

		/**
   * Lock the document scroll in order to avoid the browser native back and
   * forward navigation to change the scroll position. In the end of
   * navigation lifecycle scroll is repositioned.
   * @protected
   */

	}, {
		key: 'lockHistoryScrollPosition_',
		value: function lockHistoryScrollPosition_() {
			var state = _globals2.default.window.history.state;
			if (!state) {
				return;
			}
			// Browsers are inconsistent when re-positioning the scroll history on
			// popstate. At some browsers, history scroll happens before popstate, then
			// lock the scroll on the last known position as soon as possible after the
			// current JS execution context and capture the current value. Some others,
			// history scroll happens after popstate, in this case, we bind an once
			// scroll event to lock the las known position. Lastly, the previous two
			// behaviors can happen even on the same browser, hence the race will decide
			// the winner.
			var winner = false;
			var switchScrollPositionRace = function switchScrollPositionRace() {
				_globals2.default.document.removeEventListener('scroll', switchScrollPositionRace, false);
				if (!winner) {
					_globals2.default.window.scrollTo(state.scrollLeft, state.scrollTop);
					winner = true;
				}
			};
			_metal.async.nextTick(switchScrollPositionRace);
			_globals2.default.document.addEventListener('scroll', switchScrollPositionRace, false);
		}

		/**
   * If supported by the browser, disables native scroll restoration and
   * stores current value.
   */

	}, {
		key: 'maybeDisableNativeScrollRestoration',
		value: function maybeDisableNativeScrollRestoration() {
			if (this.nativeScrollRestorationSupported) {
				this.nativeScrollRestoration_ = _globals2.default.window.history.scrollRestoration;
				_globals2.default.window.history.scrollRestoration = 'manual';
			}
		}

		/**
   * Maybe navigate to a path.
   * @param {string} href Information about the link's href.
   * @param {Event} event Dom event that initiated the navigation.
   */

	}, {
		key: 'maybeNavigate_',
		value: function maybeNavigate_(href, event) {
			if (!this.canNavigate(href)) {
				return;
			}

			_globals2.default.capturedFormElement = event.capturedFormElement;

			var navigateFailed = false;
			try {
				this.navigate(_utils2.default.getUrlPath(href));
			} catch (err) {
				// Do not prevent link navigation in case some synchronous error occurs
				navigateFailed = true;
			}

			if (!navigateFailed) {
				event.preventDefault();
			}
		}

		/**
   * Maybe reposition scroll to hashed anchor.
   */

	}, {
		key: 'maybeRepositionScrollToHashedAnchor',
		value: function maybeRepositionScrollToHashedAnchor() {
			var hash = _globals2.default.window.location.hash;
			if (hash) {
				var anchorElement = _globals2.default.document.getElementById(hash.substring(1));
				if (anchorElement) {
					_globals2.default.window.scrollTo(anchorElement.offsetLeft, anchorElement.offsetTop);
				}
			}
		}

		/**
   * If supported by the browser, restores native scroll restoration to the
   * value captured by `maybeDisableNativeScrollRestoration`.
   */

	}, {
		key: 'maybeRestoreNativeScrollRestoration',
		value: function maybeRestoreNativeScrollRestoration() {
			if (this.nativeScrollRestorationSupported && this.nativeScrollRestoration_) {
				_globals2.default.window.history.scrollRestoration = this.nativeScrollRestoration_;
			}
		}

		/**
   * Navigates to the specified path if there is a route handler that matches.
   * @param {!string} path Path to navigate containing the base path.
   * @param {boolean=} opt_replaceHistory Replaces browser history.
   * @return {CancellablePromise} Returns a pending request cancellable promise.
   */

	}, {
		key: 'navigate',
		value: function navigate(path, opt_replaceHistory) {
			if (!_utils2.default.isHtml5HistorySupported()) {
				throw new Error('HTML5 History is not supported. Senna will not intercept navigation.');
			}

			// When reloading the same path do replaceState instead of pushState to
			// avoid polluting history with states with the same path.
			if (path === this.activePath) {
				opt_replaceHistory = true;
			}

			this.emit('beforeNavigate', {
				path: path,
				replaceHistory: !!opt_replaceHistory
			});

			return this.pendingNavigate;
		}

		/**
   * Befores navigation to a path.
   * @param {!Event} event Event facade containing <code>path</code> and
   *     <code>replaceHistory</code>.
   * @protected
   */

	}, {
		key: 'onBeforeNavigate_',
		value: function onBeforeNavigate_(event) {
			if (_globals2.default.capturedFormElement) {
				event.form = _globals2.default.capturedFormElement;
			}
		}

		/**
   * Befores navigation to a path. Runs after external listeners.
   * @param {!Event} event Event facade containing <code>path</code> and
   *     <code>replaceHistory</code>.
   * @protected
   */

	}, {
		key: 'onBeforeNavigateDefault_',
		value: function onBeforeNavigateDefault_(event) {
			if (this.pendingNavigate) {
				if (this.pendingNavigate.path === event.path) {
					console.log('Waiting...');
					return;
				}
			}

			this.emit('startNavigate', {
				form: event.form,
				path: event.path,
				replaceHistory: event.replaceHistory
			});
		}

		/**
   * Intercepts document clicks and test link elements in order to decide
   * whether Surface app can navigate.
   * @param {!Event} event Event facade
   * @protected
   */

	}, {
		key: 'onDocClickDelegate_',
		value: function onDocClickDelegate_(event) {
			if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.button) {
				console.log('Navigate aborted, invalid mouse button or modifier key pressed.');
				return;
			}
			this.maybeNavigate_(event.delegateTarget.href, event);
		}

		/**
   * Intercepts document form submits and test action path in order to decide
   * whether Surface app can navigate.
   * @param {!Event} event Event facade
   * @protected
   */

	}, {
		key: 'onDocSubmitDelegate_',
		value: function onDocSubmitDelegate_(event) {
			var form = event.delegateTarget;
			if (form.method === 'get') {
				console.log('GET method not supported');
				return;
			}
			event.capturedFormElement = form;
			this.maybeNavigate_(form.action, event);
		}

		/**
   * Listens to the window's load event in order to avoid issues with some browsers
   * that trigger popstate calls on the first load. For more information see
   * http://stackoverflow.com/questions/6421769/popstate-on-pages-load-in-chrome.
   * @protected
   */

	}, {
		key: 'onLoad_',
		value: function onLoad_() {
			var _this6 = this;

			this.skipLoadPopstate = true;
			setTimeout(function () {
				// The timeout ensures that popstate events will be unblocked right
				// after the load event occured, but not in the same event-loop cycle.
				_this6.skipLoadPopstate = false;
			}, 0);
			// Try to reposition scroll to the hashed anchor when page loads.
			this.maybeRepositionScrollToHashedAnchor();
		}

		/**
   * Handles browser history changes and fires app's navigation if the state
   * belows to us. If we detect a popstate and the state is <code>null</code>,
   * assume it is navigating to an external page or to a page we don't have
   * route, then <code>globals.window.location.reload()</code> is invoked in order to
   * reload the content to the current url.
   * @param {!Event} event Event facade
   * @protected
   */

	}, {
		key: 'onPopstate_',
		value: function onPopstate_(event) {
			if (this.skipLoadPopstate) {
				return;
			}

			var state = event.state;

			if (!state) {
				if (_globals2.default.window.location.hash) {
					// If senna is on an redirect path and a hash popstate happens
					// to a different url, reload the browser. This behavior doesn't
					// require senna to route hashed links and is closer to native
					// browser behavior.
					if (this.redirectPath && !_utils2.default.isCurrentBrowserPath(this.redirectPath)) {
						this.reloadPage();
					}
					// Always try to reposition scroll to the hashed anchor when
					// hash popstate happens.
					this.maybeRepositionScrollToHashedAnchor();
				} else {
					this.reloadPage();
				}
				return;
			}

			if (state.senna) {
				console.log('History navigation to [' + state.path + ']');
				this.popstateScrollTop = state.scrollTop;
				this.popstateScrollLeft = state.scrollLeft;
				if (!this.nativeScrollRestorationSupported) {
					this.lockHistoryScrollPosition_();
				}
				this.navigate(state.path, true);
			}
		}

		/**
   * Listens document scroll changes in order to capture the possible lock
   * scroll position for history scrolling.
   * @protected
   */

	}, {
		key: 'onScroll_',
		value: function onScroll_() {
			if (this.captureScrollPositionFromScrollEvent) {
				this.saveHistoryCurrentPageScrollPosition_();
			}
		}

		/**
   * Starts navigation to a path.
   * @param {!Event} event Event facade containing <code>path</code> and
   *     <code>replaceHistory</code>.
   * @protected
   */

	}, {
		key: 'onStartNavigate_',
		value: function onStartNavigate_(event) {
			var _this7 = this;

			this.maybeDisableNativeScrollRestoration();
			this.captureScrollPositionFromScrollEvent = false;
			_metalDom2.default.addClasses(_globals2.default.document.documentElement, this.loadingCssClass);

			var endNavigatePayload = {
				form: event.form,
				path: event.path
			};

			this.pendingNavigate = this.doNavigate_(event.path, event.replaceHistory).catch(function (reason) {
				endNavigatePayload.error = reason;
				throw reason;
			}).thenAlways(function () {
				if (!_this7.pendingNavigate) {
					_metalDom2.default.removeClasses(_globals2.default.document.documentElement, _this7.loadingCssClass);
					_this7.maybeRestoreNativeScrollRestoration();
					_this7.captureScrollPositionFromScrollEvent = true;
				}
				_this7.emit('endNavigate', endNavigatePayload);
			});

			this.pendingNavigate.path = event.path;
		}

		/**
   * Prefetches the specified path if there is a route handler that matches.
   * @param {!string} path Path to navigate containing the base path.
   * @return {CancellablePromise} Returns a pending request cancellable promise.
   */

	}, {
		key: 'prefetch',
		value: function prefetch(path) {
			var _this8 = this;

			var route = this.findRoute(path);
			if (!route) {
				return _metalPromise2.default.reject(new _metalPromise2.default.CancellationError('No route for ' + path));
			}

			console.log('Prefetching [' + path + ']');

			var nextScreen = this.createScreenInstance(path, route);

			return nextScreen.load(path).then(function () {
				return _this8.screens[path] = nextScreen;
			}).catch(function (reason) {
				_this8.handleNavigateError_(path, nextScreen, reason);
				throw reason;
			});
		}

		/**
   * Prepares screen flip. Updates history state and surfaces content.
   * @param {!string} path Path containing the querystring part.
   * @param {!Screen} nextScreen
   * @param {boolean=} opt_replaceHistory Replaces browser history.
   */

	}, {
		key: 'prepareNavigateHistory_',
		value: function prepareNavigateHistory_(path, nextScreen, opt_replaceHistory) {
			var title = nextScreen.getTitle();
			if (!_metal.core.isString(title)) {
				title = this.getDefaultTitle();
			}
			var redirectPath = nextScreen.beforeUpdateHistoryPath(path);
			var historyState = {
				form: _metal.core.isDefAndNotNull(_globals2.default.capturedFormElement),
				redirectPath: redirectPath,
				path: path,
				senna: true,
				scrollTop: 0,
				scrollLeft: 0
			};
			if (opt_replaceHistory) {
				historyState.scrollTop = this.popstateScrollTop;
				historyState.scrollLeft = this.popstateScrollLeft;
			}
			this.updateHistory_(title, redirectPath, nextScreen.beforeUpdateHistoryState(historyState), opt_replaceHistory);
			this.redirectPath = redirectPath;
		}

		/**
   * Prepares screen flip. Updates history state and surfaces content.
   * @param {!Screen} nextScreen
   * @param {!object} surfaces Map of surfaces to flip keyed by surface id.
   */

	}, {
		key: 'prepareNavigateSurfaces_',
		value: function prepareNavigateSurfaces_(nextScreen, surfaces) {
			Object.keys(surfaces).forEach(function (id) {
				var surfaceContent = nextScreen.getSurfaceContent(id);
				surfaces[id].addContent(nextScreen.getId(), surfaceContent);
				console.log('Screen [' + nextScreen.getId() + '] add content to surface ' + '[' + surfaces[id] + '] [' + (_metal.core.isDefAndNotNull(surfaceContent) ? '...' : 'empty') + ']');
			});
		}

		/**
   * Reloads the page by performing `window.location.reload()`.
   */

	}, {
		key: 'reloadPage',
		value: function reloadPage() {
			_globals2.default.window.location.reload();
		}

		/**
   * Removes route instance from app routes.
   * @param {Route} route
   * @return {boolean} True if an element was removed.
   */

	}, {
		key: 'removeRoute',
		value: function removeRoute(route) {
			return _metal.array.remove(this.routes, route);
		}

		/**
   * Removes a screen.
   * @param {!string} path Path containing the querystring part.
   */

	}, {
		key: 'removeScreen',
		value: function removeScreen(path) {
			var _this9 = this;

			var screen = this.screens[path];
			if (screen) {
				Object.keys(this.surfaces).forEach(function (surfaceId) {
					return _this9.surfaces[surfaceId].remove(screen.getId());
				});
				screen.dispose();
				delete this.screens[path];
			}
		}

		/**
   * Saves scroll position from page offset into history state.
   */

	}, {
		key: 'saveHistoryCurrentPageScrollPosition_',
		value: function saveHistoryCurrentPageScrollPosition_() {
			var state = _globals2.default.window.history.state;
			if (state && state.senna) {
				state.scrollTop = _globals2.default.window.pageYOffset;
				state.scrollLeft = _globals2.default.window.pageXOffset;
				_globals2.default.window.history.replaceState(state, null, null);
			}
		}

		/**
   * Sets allow prevent navigate.
   * @param {boolean} allowPreventNavigate
   */

	}, {
		key: 'setAllowPreventNavigate',
		value: function setAllowPreventNavigate(allowPreventNavigate) {
			this.allowPreventNavigate = allowPreventNavigate;
		}

		/**
   * Sets link base path.
   * @param {!string} path
   */

	}, {
		key: 'setBasePath',
		value: function setBasePath(basePath) {
			this.basePath = basePath;
		}

		/**
   * Sets the default page title.
   * @param {string} defaultTitle
   */

	}, {
		key: 'setDefaultTitle',
		value: function setDefaultTitle(defaultTitle) {
			this.defaultTitle = defaultTitle;
		}

		/**
   * Sets the form selector.
   * @param {!string} formSelector
   */

	}, {
		key: 'setFormSelector',
		value: function setFormSelector(formSelector) {
			this.formSelector = formSelector;
			if (this.formEventHandler_) {
				this.formEventHandler_.removeListener();
			}
			this.formEventHandler_ = _metalDom2.default.delegate(document, 'submit', this.formSelector, this.onDocSubmitDelegate_.bind(this), this.allowPreventNavigate);
		}

		/**
   * Sets the link selector.
   * @param {!string} linkSelector
   */

	}, {
		key: 'setLinkSelector',
		value: function setLinkSelector(linkSelector) {
			this.linkSelector = linkSelector;
			if (this.linkEventHandler_) {
				this.linkEventHandler_.removeListener();
			}
			this.linkEventHandler_ = _metalDom2.default.delegate(document, 'click', this.linkSelector, this.onDocClickDelegate_.bind(this), this.allowPreventNavigate);
		}

		/**
   * Sets the loading css class.
   * @param {!string} loadingCssClass
   */

	}, {
		key: 'setLoadingCssClass',
		value: function setLoadingCssClass(loadingCssClass) {
			this.loadingCssClass = loadingCssClass;
		}

		/**
   * Sets the update scroll position value.
   * @param {boolean} updateScrollPosition
   */

	}, {
		key: 'setUpdateScrollPosition',
		value: function setUpdateScrollPosition(updateScrollPosition) {
			this.updateScrollPosition = updateScrollPosition;
		}

		/**
   * Cancels pending navigate with <code>Cancel pending navigation</code> error.
   * @protected
   */

	}, {
		key: 'stopPendingNavigate_',
		value: function stopPendingNavigate_() {
			if (this.pendingNavigate) {
				this.pendingNavigate.cancel('Cancel pending navigation');
				this.pendingNavigate = null;
			}
		}

		/**
   * Sync document scroll position twice, the first one synchronous and then
   * one inside <code>async.nextTick</code>. Relevant to browsers that fires
   * scroll restoration asynchronously after popstate.
   * @protected
   * @return {?CancellablePromise=}
   */

	}, {
		key: 'syncScrollPositionSyncThenAsync_',
		value: function syncScrollPositionSyncThenAsync_() {
			var _this10 = this;

			var state = _globals2.default.window.history.state;
			if (!state) {
				return;
			}

			var scrollTop = state.scrollTop;
			var scrollLeft = state.scrollLeft;

			var sync = function sync() {
				if (_this10.updateScrollPosition) {
					_globals2.default.window.scrollTo(scrollLeft, scrollTop);
				}
			};

			return new _metalPromise2.default(function (resolve) {
				return sync() & _metal.async.nextTick(function () {
					return sync() & resolve();
				});
			});
		}

		/**
   * Updates or replace browser history.
   * @param {?string} title Document title.
   * @param {!string} path Path containing the querystring part.
   * @param {!object} state
   * @param {boolean=} opt_replaceHistory Replaces browser history.
   * @protected
   */

	}, {
		key: 'updateHistory_',
		value: function updateHistory_(title, path, state, opt_replaceHistory) {
			if (opt_replaceHistory) {
				_globals2.default.window.history.replaceState(state, title, path);
			} else {
				_globals2.default.window.history.pushState(state, title, path);
			}
			_globals2.default.document.title = title;
		}
	}]);

	return App;
}(_metalEvents.EventEmitter);

exports.default = App;