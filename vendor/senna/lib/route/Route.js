'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = require('metal');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Route = function () {

	/**
  * Route class.
  * @param {!string|RegExp|Function} path
  * @param {!Function} handler
  * @constructor
  */

	function Route(path, handler) {
		_classCallCheck(this, Route);

		if (!_metal.core.isDefAndNotNull(path)) {
			throw new Error('Route path not specified.');
		}
		if (!_metal.core.isFunction(handler)) {
			throw new Error('Route handler is not a function.');
		}

		/**
   * Defines the handler which will execute once a URL in the application
   * matches the path.
   * @type {!Function}
   * @protected
   */
		this.handler = handler;

		/**
   * Defines the path which will trigger the route handler.
   * @type {!string|RegExp|Function}
   * @protected
   */
		this.path = path;
	}

	/**
  * Gets the route handler.
  * @return {!Function}
  */


	_createClass(Route, [{
		key: 'getHandler',
		value: function getHandler() {
			return this.handler;
		}

		/**
   * Gets the route path.
   * @return {!string|RegExp|Function}
   */

	}, {
		key: 'getPath',
		value: function getPath() {
			return this.path;
		}

		/**
   * Matches if the router can handle the tested path.
   * @param {!string} value Path to test and may contains the querystring
   *     part.
   * @return {Boolean} Returns true if matches any route.
   */

	}, {
		key: 'matchesPath',
		value: function matchesPath(value) {
			var path = this.path;

			if (_metal.core.isString(path)) {
				return value === path;
			}
			if (_metal.core.isFunction(path)) {
				return path(value);
			}
			if (path instanceof RegExp) {
				return value.search(path) > -1;
			}

			return false;
		}
	}]);

	return Route;
}();

exports.default = Route;