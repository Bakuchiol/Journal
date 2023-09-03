const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema(
    {
        prompt_1: {
            type: String,
            required: true
        },
        prompt_2: {
            type: String,
            required: true
        },
        prompt_3: {
            type: String,
            required: true
        },
        prompt_4: {
            type: String,
            required: true
        },
        prompt_5: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Journal', journalSchema)