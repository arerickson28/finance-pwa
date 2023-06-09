const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const transactionSchema = new Schema({
    envelopeId: {
        type: String,
        required: true
    },
    transactionName: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
})

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = {Transaction, transactionSchema};