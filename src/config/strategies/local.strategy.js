/**
 * Created by wissem on 2/28/17.
 */

var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;

module.exports = function () {
  passport.use(new LocalStrategy({
      usernameField :'username',
      passwordField: 'password'
  }, function (firstname,secondname,username,email,password,done) {
      var user = {
          firstname: firstname,
          secondname : secondname,
          username : username,
          email: email,
          password : password
      };
      done(null,user);
  }));
};