const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
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
        type: Date,
    }
})

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = {Expense, expenseSchema};