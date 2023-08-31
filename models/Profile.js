const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
    {
        name: String,
        photo: String
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Profile', profileSchema)