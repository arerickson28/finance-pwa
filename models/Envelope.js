const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const envelopeSchema = new Schema({
    envelopeName: {
        type: String,
        required: true,
        trim: true,
    },
    envelopeAmount: {
        type: Number,
        required: true,
    }
})

const Envelope = mongoose.model("Envelope", envelopeSchema);

module.exports = { Envelope, envelopeSchema };