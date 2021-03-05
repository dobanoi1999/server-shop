const mongoose = require('mongoose')

const orderModel = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    card: {
        type: Array,
        required: true,
    },
    status: {
        type: String,
        default: "pending",
    },
    total: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model("Orders", orderModel)