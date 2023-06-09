const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    accountId: {
        type: Number,
        required: true
    },
    expenseName: {
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
    },
    isDue: {
        type: Boolean,
    }
})

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = {Expense, expenseSchema};