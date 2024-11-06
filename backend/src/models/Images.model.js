const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        images: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    });

const Image = mongoose.model("Image", ImageSchema);
module.exports = Image