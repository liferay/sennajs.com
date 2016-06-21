'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _globals = require('../globals/globals');

var _globals2 = _interopRequireDefault(_globals);

var _AppDataAttributeHandler = require('./AppDataAttributeHandler');

var _AppDataAttributeHandler2 = _interopRequireDefault(_AppDataAttributeHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Data attribute handler.
 * @type {AppDataAttributeHandler}
 */
var dataAttributeHandler = new _AppDataAttributeHandler2.default();

_globals2.default.document.addEventListener('DOMContentLoaded', function () {
  dataAttributeHandler.setBaseElement(_globals2.default.document.body);
  dataAttributeHandler.handle();
});

exports.default = dataAttributeHandler;