const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const payableSchema = new Schema({
    accountId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
    },
    recipient: {
        type: String,
        required: true
    },
    notes: {
        type: String
    }
})

const Payable = mongoose.model("Payable", payableSchema);

module.exports = {Payable};