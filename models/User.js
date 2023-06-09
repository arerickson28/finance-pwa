const mongoose = require("mongoose");
const {Account, accountSchema} = require("./Account")

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must match an email address!"],
      },
    password: {
        type: String,
        required: true,
        minlength: 8,
      }
})



const User = mongoose.model("User", userSchema);

module.exports = {User, userSchema};