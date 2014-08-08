'use strict';

var util = require('util');
var BaseAction = require('../../tasks/lib/BaseAction');

function AboutAction() {
  BaseAction.call(this);
}

util.inherits(AboutAction, BaseAction);

AboutAction.prototype.get = function(req, res) {
  var contents = this.render('views.home', {
    content: 'About'
  });
  res.send(contents);
};

module.exports = AboutAction;
