const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const incomeSchema = new Schema({
    accountId: {
        type: String,
        required: true
    },
    incomeName: {
        type: String,
        required: true,
        trim: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    frequency: {
        type: String,
    }
})

const Income = mongoose.model("Income", incomeSchema);

module.exports = {Income};