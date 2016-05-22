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
    // console.log('rock');
    var username = req.body.username;
    var password = req.body.password;

    async.waterfall([
      function(callback) {
        User.findOne({username: username}, callback);
      },
      function(user, callback) {
        // console.log('rock');
        if(user) {
          // console.log('rock1');
          if(user.checkPassword(password)) {
            callback(null, user);
          } else {
            // .. 403 Forbidden
          }
        } else {
          // console.log('rock2');
          callback(null);
          // .. 403 Forbidden
        }
      }
    ], function(err, user) {
      console.log('rock');
      console.log(arguments);

      req.session.user = user._id;
      res.send({});
    });

    /*User.findOne({username: username}, function(err, user) {
      if(user) {
        console.log('user exist');
        if(user.checkPassword(password)) {
          // .. 200 Ok
          console.log('user exist and password correct');
        } else {
          // .. 403 Forbidden
        }
      } else {
        // .. 403 Forbidden
      }
    });*/
  });
  app.get('/chat', function (req, res) {
    res.render('chat');
  });


  /*app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/users', function (req, res) {
    User.find({}, function(err, results) {
      res.json(results);
    })
    // res.render('index');
  });
  app.get('/users/:id', function (req, res) {
    User.findById(req.params.id, function(err, user) {
      res.json(user);
    });
    // res.render('index');
  });*/
}
