var User = require('./models/user').User;

var user = new User({
    username: "Max"
});

user.save(function (err, user, affected) {
    //if (err) throw err;
    console.log(arguments);
});




/*var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat');

var schema = mongoose.Schema({
   name: String
});
schema.methods.meow = function() {
    console.log(this.get('name'));
};

var Student = mongoose.model('Student', schema);

var angeliko = new Student({ name: 'Angela'});

//console.log(angeliko);

angeliko.save(function(err, angeliko, affected) {
    angeliko.meow();
});*/