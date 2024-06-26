const User = require("../models/user.model");
const Product = require("../models/product.model");
const Quantity = require("../models/productQuantity");
const Rating = require("../models/productRating");
const uploadOnCloudinary = require("../utils/cloudinary");


const ProductCollectionData = async (req, res) => {
    try {
        // console.log("req.filereq.file", req.file);
        const { discountPriceOff, heading, description, actualPrice, discountedPrice } = req.body
        if (
            [discountPriceOff, heading, description, actualPrice, discountedPrice].some((field) => field?.trim() === "")
        ) {
            return res.status(400).send({
                status: false,
                message: "All fields are required"
            })
        }
        const image = req.file.path;

        if (!image) {
            return res.status(400).send({
                status: false,
                message: 'Avatar file is required'
            })
        }

        const imagecloud = await uploadOnCloudinary(image);

        const user = await Product.create({
            discountPriceOff,
            heading,
            description,
            actualPrice,
            discountedPrice,
            image: imagecloud.url || "",
        });

        return res.status(200).send({
            status: 200,
            message: "User Products Make Successfully",
            data: user
        });

    } catch (error) {
        console.log("error", error);

    }
};

const GetAllProduct = async (req, res) => {

    try {

        const Products = await Product.find();
        res.status(200).send({
            status: 200,
            message: "Fetch All Products",
            data: Products
        })

    } catch (error) {

        console.log("error", error);

    }

}



module.exports = { ProductCollectionData, GetAllProduct }
