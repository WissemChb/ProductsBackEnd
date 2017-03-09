/**
 * Created by wissem on 3/6/17.
 */

var express = require('express'),
    actions = require('../action/loginAction');

var router = express.Router();

router.post('/login', actions.authenticate);


router.get('/login', function (req, res) {
    res.json({'message': 'Hello RT4'});
})

module.exports = router;