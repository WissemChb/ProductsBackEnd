var express = require('express');
var authRouter = express.Router();
var mongoose = require("mongoose");
var session = require('express-session');
var passport =require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');


var router = function () {
    authRouter.route('/signUp')
        .post(function (req,res) {

                var url ='mongodb://localhost:27017/libraryApp';
                mongodb.connect(url,function (err,db) {
                   var collection = db.collection('users');
                   var user = {
                      firstName : req.body.firstname,
                       secondName : req.body.secondname,
                       username : req.body.username,
                       email : req.body.email,
                       password : req.body.password
                   };
                   collection.insert(user,function (err,result) {
                       req.login(result.ops[0],function () {
                           res.send('it\'s ok ');
                       })
                   });


            });
        });
}

module.exports= router;