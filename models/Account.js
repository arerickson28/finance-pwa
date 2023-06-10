const mongoose = require("mongoose");

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

module.exports = {Account};