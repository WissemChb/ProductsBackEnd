/**
 * Created by wissem on 2/22/17.
 */

var express= require('express');
var router = express.Router();

// GET home page

router.get('/',function (req,res) {
    res.render('index.html');
});

module.exports = router;