const productSchema = require('../schemas/product')
const mongoose = require('mongoose')

const productModel = mongoose.model('product', productSchema);
module.exports = productModel