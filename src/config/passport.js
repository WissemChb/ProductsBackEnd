/**
 * Created by wissem on 2/28/17.
 */


var User = require('../../modals/user');
var JwtStrategy = require('passport-jwt').Strategy;
ExtractJwt = require('passport-jwt').ExtractJwt;


module.exports = function (passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = 'RT4DEVTeam';
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({id: jwt_payload.id}, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
    }));
}


/*
 var passport = require('passport');

 module.exports = function (app) {
 app.use(passport.initialize());
 app.use(passport.session());

 passport.serializeUser(function (user,done) {
 done(null, user) ;
 });
 passport.deserializeUser(function (user,done) {
 done(null, user) ;
 });
 require('./strategies/local.strategy')()
 }

 */
