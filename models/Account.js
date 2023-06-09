const mongoose = require("mongoose");
const {Envelope, envelopeSchema} = require("./Envelope")
const {Expense, expenseSchema} = require("./Expense")
const {Income, incomeSchema} = require("./Income")
// const {User, userSchema} = require("./User")

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    // user: userSchema,
    // checkingAmount: {
    //     type: Number,
    //     required: true,
    // },
    checking: {
        type: Number
    },
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
    incomes: {
        type: [incomeSchema]
    }
})

const Account = mongoose.model("Account", accountSchema);

module.exports = {Account, accountSchema};