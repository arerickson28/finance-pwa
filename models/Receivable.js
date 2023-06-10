const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const receivableSchema = new Schema({
    accountId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
    },
    from: {
        type: String,
        required: true
    },
    notes: {
        type: String
    }
})

const Receivable = mongoose.model("Receivable", receivableSchema);

module.exports = {Receivable};