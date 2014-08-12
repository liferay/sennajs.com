'use strict';

var util = require('util');
var BaseAction = require('../../tasks/lib/BaseAction');

function AboutAction() {
  BaseAction.call(this);
}

util.inherits(AboutAction, BaseAction);

AboutAction.prototype.get = function(req, res) {
  var instance = this;

  var contents = instance.render('views.home', {
    content: instance.render('views.contentAbout'),
    title: 'About'
  });
  res.send(contents);
};

module.exports = AboutAction;
