const mongoose = require("mongoose");
const {Envelope, envelopeSchema} = require("./Envelope")
const {Expense, expenseSchema} = require("./Expense")
const {Income, incomeSchema} = require("./Income")
// const {User, userSchema} = require("./User")

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    userId : {
        type: Number,
        required: true
    },
    checking: {
        type: Number
    }
})

const Account = mongoose.model("Account", accountSchema);

module.exports = {Account, accountSchema};