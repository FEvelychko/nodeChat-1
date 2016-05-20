var mongoose = require('../lib/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
   username: {
       type: String,
       unique: false,
       required: false
   },
    /*hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }*/
});

/*schema.virtual('passwrod')
    .set(function(password) {
        this._plainPassword = password;
        this.salt = Math.random() + '';
    })
    .get(function() {return this._plainPassword});*/

exports.User = mongoose.model('User', schema);

