const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ProductRating = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        rating: {
            type: Number,
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false

    }
)

const Rating = mongoose.model("Rating", ProductRating);

module.exports = Rating