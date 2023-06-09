const mongoose = require("mongoose");
const {Envelope, envelopeSchema} = require("./Envelope")
const {Expense, expenseSchema} = require("./Expense")
const {Income, incomeSchema} = require("./Income")


const Schema = mongoose.Schema;

const accountSchema = new Schema({
    userId : {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number
    }
})

const Account = mongoose.model("Account", accountSchema);

module.exports = {Account, accountSchema};