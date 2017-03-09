/**
 * Created by wissem on 3/6/17.
 */
var express = require('express');
var router = express.Router();
//var mongoose = require("mongoose");
var session = require('express-session');
var passport = require('passport');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
var actions = require('../action/signupAction');


router.get('/signup', function (req, res) {
    res.json({'message': 'Hello RT4 !!!! '});
});

router.post('/signup', actions.signupAction);


module.exports = router;
