/**
 * Created by wissem on 3/7/17.
 */

var Customer = require('../modals/user');


var signupFunction = {
    signupAction: function (req, res) {
        var customer = new Customer({
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.passwordMatch.password,
        });
        customer.save(function (err) {
            if (!err) {
                res.json({'message': 'success'});
                console.log('good job');

            } else {
                res.json({'message': 'fail'});
                console.log('error signup function' + err);
            }
        });

    }
}

module.exports = signupFunction;