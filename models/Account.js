const mongoose = require("mongoose");
const Envelope= require("./Envelope")
const Expense = require("./Expense")

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        trim: true,
    },
    checkingAmount: {
        type: Number,
        required: true,
    },
    envelopes: {
        type: [Envelope]
    },
    expenses: {
        type: [Expense]
    },
    due: {
        type: [Expense]
    }
})

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;