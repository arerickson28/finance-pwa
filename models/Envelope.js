const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const envelopeSchema = new Schema({
    accountId: {
        type: String,
        required: true
    },
    envelopeName: {
        type: String,
        required: true,
        trim: true,
    },
    envelopeBalance: {
        type: Number,
        required: true,
    }
})

const Envelope = mongoose.model("Envelope", envelopeSchema);

module.exports = { Envelope };