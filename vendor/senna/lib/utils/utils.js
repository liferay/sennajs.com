'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _globals = require('../globals/globals');

var _globals2 = _interopRequireDefault(_globals);

var _metalUri = require('metal-uri');

var _metalUri2 = _interopRequireDefault(_metalUri);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A collection of static utility functions.
 * @const
 */

var utils = function () {
	function utils() {
		_classCallCheck(this, utils);
	}

	_createClass(utils, null, [{
		key: 'copyNodeAttributes',


		/**
   * Copies attributes form source node to target node.
   * @return {void}
   * @static
   */
		value: function copyNodeAttributes(source, target) {
			Array.prototype.slice.call(source.attributes).forEach(function (attribute) {
				return target.setAttribute(attribute.name, attribute.value);
			});
		}

		/**
   * Gets the current browser path including hashbang.
   * @return {!string}
   * @static
   */

	}, {
		key: 'getCurrentBrowserPath',
		value: function getCurrentBrowserPath() {
			return this.getCurrentBrowserPathWithoutHash() + _globals2.default.window.location.hash;
		}

		/**
   * Gets the current browser path excluding hashbang.
   * @return {!string}
   * @static
   */

	}, {
		key: 'getCurrentBrowserPathWithoutHash',
		value: function getCurrentBrowserPathWithoutHash() {
			return _globals2.default.window.location.pathname + _globals2.default.window.location.search;
		}

		/**
   * Extracts the path part of an url.
   * @return {!string}
   * @static
   */

	}, {
		key: 'getUrlPath',
		value: function getUrlPath(url) {
			var uri = new _metalUri2.default(url);
			return uri.getPathname() + uri.getSearch() + uri.getHash();
		}

		/**
   * Extracts the path part of an url without hashbang.
   * @return {!string}
   * @static
   */

	}, {
		key: 'getUrlPathWithoutHash',
		value: function getUrlPathWithoutHash(url) {
			var uri = new _metalUri2.default(url);
			return uri.getPathname() + uri.getSearch();
		}

		/**
   * Checks if url is in the same browser current url excluding the hashbang.
   * @param  {!string} url
   * @return {boolean}
   * @static
   */

	}, {
		key: 'isCurrentBrowserPath',
		value: function isCurrentBrowserPath(url) {
			if (url) {
				return utils.getUrlPathWithoutHash(url) === this.getCurrentBrowserPathWithoutHash();
			}
			return false;
		}

		/**
   * Returns true if HTML5 History api is supported.
   * @return {boolean}
   * @static
   */

	}, {
		key: 'isHtml5HistorySupported',
		value: function isHtml5HistorySupported() {
			return !!(_globals2.default.window.history && _globals2.default.window.history.pushState);
		}

		/**
   * Removes all attributes form node.
   * @return {void}
   * @static
   */

	}, {
		key: 'clearNodeAttributes',
		value: function clearNodeAttributes(node) {
			Array.prototype.slice.call(node.attributes).forEach(function (attribute) {
				return node.removeAttribute(attribute.name);
			});
		}
	}]);

	return utils;
}();

exports.default = utils;