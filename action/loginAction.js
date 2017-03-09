/**
 * Created by wissem on 3/6/17.
 */


var User = require('../modals/user');
var jwt = require('jwt-simple');


var functions = {
    authenticate: function (req, res) {
        User.findOne({
            username: req.body.name
        }, function (err, user) {
            if (err) throw err;
            if (!user) {
                return res.status(403).send({success: false, msg: 'Authenticaton failed, user not found.'});
            } else {
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (isMatch && !err) {
                        var token = jwt.encode(user, 'RT4DEVTeam');
                        res.json({success: true, token: token});
                    } else {
                        return res.status(403).send({success: false, msg: 'Authenticaton failed, wrong password.'});
                    }
                })
            }
        })
    },

};
module.exports = functions;