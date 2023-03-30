const mongoose = require('mongoose')
const Schema = mongoose.Schema

const product = new Schema({

    title:String,
    price:String
})

const productData = mongoose.model('product',product)

module.exports = productData