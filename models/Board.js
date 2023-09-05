const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema(
    {
        photo: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Board', boardSchema)