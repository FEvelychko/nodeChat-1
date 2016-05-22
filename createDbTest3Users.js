var mongoose = require('./lib/mongoose');
var async = require('async');
// var User = require('./models/user').User;

// 1. drop database
// 2. create & save 3 users
// 3. close connection

async.series([
  open,
  dropDatabase1,
  requireModels,
  createUsers,
], function(err, results) {
  console.dir(arguments);
  mongoose.disconnect();
});

function open(callback) {
  mongoose.connection.on('open', callback);
}

function dropDatabase1(callback) {
  var db = mongoose.connection.db;
  db.dropDatabase(callback)
}

function requireModels(callback) {
  require('./models/user');

  async.each(Object.keys(mongoose.models), function(modelName, callback) {
    mongoose.models[modelName].ensureIndexes(callback);
  }, callback);
}

function createUsers(callback) {
  var users = [
    {username: 'Петро', password:'123'},
    {username: 'Василь', password:'456'},
    {username: 'Миколай', password:'789'}
  ];

  async.each(users, function(userData, callback) {
    var user = new mongoose.models.User(userData);
    user.save(callback);
  }, callback);
}
