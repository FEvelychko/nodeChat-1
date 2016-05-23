var User = require('../models/user').User;
var async = require('async');

module.exports = function(app) {

  app.get('/', function (req, res) {
    res.render('frontpage');
  });
  app.get('/login', function (req, res) {
    res.render('login');
  });
  app.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username}, function(err, user) {
      if(user) {
        if(user.checkPassword(password)) {
          res.status(200).send('Success');
        } else {
          res.status(403).send('Password is not valid');
        }
      } else {
        res.status(403).send('User is not exist');
      }
    });
  });
  app.get('/chat', function (req, res) {
    res.render('chat');
  });
};
