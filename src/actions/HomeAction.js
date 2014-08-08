'use strict';

exports.get = function(req, res) {
  var contents = this.render('views.home', {
    content: 'Home'
  });
  res.send(contents);
};
