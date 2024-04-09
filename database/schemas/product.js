const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
    type: {
        type:String,
        required:true
    }, // String is shorthand for {type: String}
    imagePath: String,
    reference:{
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true
    },
    date: { type: Date, default: Date.now },
});

module.exports = productSchema