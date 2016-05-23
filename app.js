var express = require('express');
var mongoose = require('mongoose');
var http = require('http');
var path = require('path');

var logger = require('morgan');
var bodyParser = require('body-parser');
var config = require('./config');
var cookieParser = require('cookie-parser');
var session = require('express-session');
// var session = require('cookie-session');

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
require('./routes')(app);

http.createServer(app).listen(config.get('port'));
