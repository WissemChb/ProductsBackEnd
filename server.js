/**
 * Created by wissem on 2/22/17.
 */
var express =require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var passport =require('passport')
var session=require('express-session');
var localStrategy = require('passport-local').Strategy;


var index = require('./routes/index');
var products = require('./routes/products');
var signUp = require('./routes/signUp');

var app = express();

//Alow CORS

app.use(cors());

//view engine
app.use(express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/',index);
app.use('/api' ,products);
app.use('/',signUp);
app.use(session({secret : 'RT4',
                    save : true, saveUninitialized: true}));
require('./src/config/passport');

// catch 404 and forward to error handler

/*app.use(function (req,res,next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});*/

var server  = app.listen(process.env.port || 5000,function () {
    var port = server.address().port;
    console.log('App listening at http://localhost:%s',port);
});