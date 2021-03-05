const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        required: true,
        type: Object
    },
    category: String

}, {
    timestamps: true
})

module.exports = mongoose.model('Products', productSchema)