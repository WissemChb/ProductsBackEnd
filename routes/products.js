/**
 * Created by wissem on 2/22/17.
 */

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/libraryApp', ['Products']);

// GET ALL Products

router.get('/Products',function (req,res) {
    db.Products.find(function (err,Products) {
        if(err){
            res.send(err);
        } else{
            res.send(JSON.stringify(Products));
        }
    });
});

// GET ONE PRODUCT

router.get('/Products/:id',function (req,res,next) {
    db.Products.findOne({_id:mongojs.ObjectId(req.params.id)},
        function(err,Product){
            if(err){
                res.send(err);
            }else{
                res.json(Product);
            }
        });
});

//POST/SAVE PRODUCT

router.post('/Products',function(req,res){
    var product = req.body;
    if(!product.text || !(product.isCompleted+'')) {
        res.status(400);
        res.json({
            "error": "Invalid DATA"
        });
    }else {
        db.Products.save(product,function(err,result){
            if(err){
                res.send(err);
            }else {
                res.json(result);
            }
        });
    }
});

//PUT/UPDATE a Product

router.put('Products/:id',function(req,res) {
    var product = req.body;
    var updObj = {};
    if (product.isCompleted) {
        updObj.isCompleted = product.isCompleted;
    }
    if (product.text) {
        updObj.text = product.text;
    }
    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid DATA"
        });
    } else {
        db.Products.update({_id: mongojs.ObjectId(req.params.id)}
            , updObj, {}, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(result);
                }
            });
    }

});

//DELETE a Product

router.delete('/Products/:id',function (req,res) {
    db.Products.remove({
            __id : mongojs.ObjectId(req.params.id)},'',
        function (err,result) {
            if(err){
                res.send(err);
            }else{
                res.json(result);
            }
        });
});

module.exports=router;