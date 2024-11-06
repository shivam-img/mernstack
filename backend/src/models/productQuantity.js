const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ProductQuantity = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        Quantity: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
);


const Quantity = mongoose.model("Quantity", ProductQuantity);

module.exports = Quantity