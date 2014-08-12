'use strict';

exports.get = function(req, res) {
  var contents = this.render('views.home', {
    content: this.render('views.contentHome', {
      userName: 'Eduardo Lundgren'
    }),
    title: 'Home'
  });
  res.send(contents);
};
