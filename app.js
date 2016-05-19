var express = require('express');
var http = require('http');
var path = require('path');

var logger = require('morgan');
var config = require('./config');
//var router = express.Router();

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());

app.get('/', function (req, res) {
  res.render('index');
});

http.createServer(app).listen(config.get('port'));
