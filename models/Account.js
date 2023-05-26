const mongoose = require("mongoose");
const {Envelope, envelopeSchema} = require("./Envelope")
const {Expense, expenseSchema} = require("./Expense")
// const {User, userSchema} = require("./User")

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    // user: userSchema,
    // checkingAmount: {
    //     type: Number,
    //     required: true,
    // },
    monthlyIncome: {
        type: Number,
        required: true
    },
    envelopes: {
        type: [envelopeSchema]
    },
    expenses: {
        type: [expenseSchema]
    },
    due: {
        type: [expenseSchema]
    }
})

const Account = mongoose.model("Account", accountSchema);

module.exports = {Account, accountSchema};