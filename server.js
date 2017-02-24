/**
 * Created by wissem on 2/22/17.
 */
var express =require('express');
var path = require('path');
var logger = require('morgan');
var cookiesparer = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');



var index = require('./routes/index');
var products = require('./routes/products');

var app = express();

//Alow CORS

app.use(cors());

//view engine

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookiesparer());
app.use(express.static(path.join(__dirname,'public')));
app.use('/',index);
app.use('/api' ,products);


/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/

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