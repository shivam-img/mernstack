const mongoose = require("mongoose");
const Schema = mongoose.Schema


const ProductSchema = new Schema(
    {

        image: {
            type: String,
            require: true
        },
        discountPriceOff: {
            type: String,
            require: true
        },
        heading: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        actualPrice: {
            type: String,
            require: true
        },
        discountedPrice: {
            type: String,
            require: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true,
        versionKey : false
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product