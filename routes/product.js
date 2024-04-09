var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const ProductModel = require('../database/models/product')


/* GET users listing. */
router.get('/', async function (req, res, next) {
    res.send(await ProductModel.find());
});
router.post('/', async function (req, res, next) {
    try {
        const product = new ProductModel(req.body)
        await product.save();
        res.send('respond with products');
    } catch (e) {
        res.status(400).send(e._message);
    }
});
router.get('/:id', async function (req, res, next) {
    try {
        const product = await ProductModel.findOne({_id: req.params.id})
        if (product) {
            res.send(product);
        } else {
            res.status(404).send('product not found')
        }
    } catch (e) {
        console.log('eroooe' + e)
    }

});
router.patch('/:id', async function (req, res, next) {
    try {
        const product = await ProductModel.findOneAndUpdate({_id: req.params.id}, req.body)
        if(product){
            res.status(200).send('updated');
        }else
            res.status(404).send('product not found');
    } catch (e) {
        console.log('eroooe' + e)
    }

});
router.delete('/:id', async function (req, res, next) {
    try {
        const product = await ProductModel.findOneAndDelete({_id: req.params.id})
    } catch (e) {
        console.log('eroooe' + e)
    }
    res.send('deleted');
});

module.exports = router;
