'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var BaseAction = require('./BaseAction');
var ClassLoader = require('./ClassLoader');

/**
 * Provides an application wrapper class to some engine, by default for
 * express.
 * @constructor
 */
function App() {
  this.classLoader = new ClassLoader();
  this.classLoader.setBasePath('dist');
}

/**
 * Holds the class loader reference.
 * @type {ClassLoader}
 */
App.prototype.classLoader = null;

/**
 * Holds the application engine, by default for express.
 * @type {Function}
 */
App.prototype.engine = express();

/**
 * Holds the http server reference returned by `http.createServer`.
 * @type {Object}
 */
App.prototype.httpServer = null;

/**
 * Holds the Madvoc route configuration handler.
 * @type {madvoc.RouteConfigurator}
 */
App.prototype.routeConfigurator = null;

/**
 * Holds the server port information.
 * @default 3000
 * @type {Number}
 */
App.prototype.serverPort = 3000;

/**
 * Holds the template engine reference. All controllers shares this same
 * reference, hence it only pre compile templates once when app starts.
 * @type {TemplateEngine}
 */
App.prototype.templateEngine = null;

/**
 * Gets the class loader reference.
 * @return {ClassLoader}
 */
App.prototype.getClassLoader = function() {
  return this.classLoader;
};

/**
 * Gets the application engine reference.
 * @return {Function}
 */
App.prototype.getEngine = function() {
  return this.engine;
};

/**
 * Gets the http server reference.
 * @return {Object}
 */
App.prototype.getHttpServer = function() {
  return this.httpServer;
};

/**
 * Gets the madvoc router configuration reference.
 * @return {madvoc.RouterConfiguration}
 */
App.prototype.getRouteConfigurator = function() {
  return this.routeConfigurator;
};

/**
 * Gets the server port.
 * @return {Number}
 */
App.prototype.getServerPort = function() {
  return this.serverPort;
};

/**
 * Gets the template engine reference.
 * @return {TemplateEngine}
 */
App.prototype.getTemplateEngine = function() {
  return this.templateEngine;
};

/**
 * Serves a folder as static.
 * @param {String} filepath File or directory path to be served.
 * @param {String} mountPath Mount path to serve the filepath.
 */
App.prototype.serveStatic = function(mountPath, filepath) {
  this.engine.use(mountPath, express.static(filepath));
};

/**
 * Sets the class loader reference.
 * @param {ClassLoader} classLoader
 */
App.prototype.setClassLoader = function(classLoader) {
  this.classLoader = classLoader;
};

/**
 * Sets the application engine reference.
 * @param {Function} engine
 */
App.prototype.setEngine = function(engine) {
  this.engine = engine;
};

/**
 * Sets the http server reference.
 * @param {Object} httpServer
 */
App.prototype.setHttpServer = function(httpServer) {
  this.httpServer = httpServer;
};

/**
 * Sets the madvoc route configuration and regiter all parsed routes into the
 * application engine, in this case in express.
 * @param {madvoc.RouteConfiguration} routeConfigurator
 */
App.prototype.setRouteConfigurator = function(routeConfigurator) {
  this.routeConfigurator = routeConfigurator;

  // Register routes into app engine.
  var routes = this.routeConfigurator.getRoutes();
  for (var i = 0; i < routes.length; i++) {
    var route = routes[i];

    var actionClass = route.getActionClass();
    var actionMethod = route.getActionMethod();
    if (!actionClass) {
      // If there is no action class, tries to resolve the alias as a static
      // file path.
      var alias = route.getAlias();
      if (alias) {
        this.serveStatic(route.getPath(), path.join(process.cwd(), 'dist', alias));
      }
      continue;
    }

    var Class = this.classLoader.loadClass(actionClass);

    var action;
    if (typeof Class === 'function') {
      action = new Class();
    } else {
      action = new BaseAction();
      action[actionMethod] = Class[actionMethod];
    }

    var middleware = action[actionMethod];
    if (!middleware) {
      throw new Error('Invalid route ' + routeConfigurator.getRoutesFilepath() + ' ' + route.toString());
    }

    action.setTemplateEngine(this.getTemplateEngine());

    if (route.getHttpMethod()) {
      var verb = route.getHttpMethod().toLowerCase();
      this.engine[verb](route.getPath(), middleware.bind(action));
    } else {
      this.engine.use(route.getPath(), middleware.bind(action));
    }
  }
};

/**
 * Sets the server port.
 * @param {Number} serverPort
 */
App.prototype.setServerPort = function(serverPort) {
  this.serverPort = serverPort;
};

/**
 * Sets the template engine reference.
 * @param {TemplateEngine} templateEngine
 */
App.prototype.setTemplateEngine = function(templateEngine) {
  this.templateEngine = templateEngine;
};

/**
 * Starts the server.
 * @return {Object} The server reference.
 */
App.prototype.start = function() {
  if (this.httpServer) {
    return this.httpServer;
  }
  var server = http.createServer(this.engine).listen(this.serverPort);
  this.setHttpServer(server);
  return server;
};

/**
 * Stops the running server.
 */
App.prototype.stop = function() {
  if (!this.httpServer) {
    throw new Error('Server is not running.');
  }
  this.httpServer.stop();
};

module.exports = App;
