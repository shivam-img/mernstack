const uploadOnCloudinary = require("../utils/cloudinary");
const Image = require("../models/Images.model")



const imagescollectionData = (async (req, res) => {
    try {
        console.log("req.filereq.file", req.file);
        // hytfg
        const { title } = req.body

        if (!title) {
            return res.status(400).send({
                message: "title feield is requireed"
            });
        }

        const avatarLocalPath = req.file?.path;

        console.log("avatarLocalPath", avatarLocalPath);

        const avatar = await uploadOnCloudinary(avatarLocalPath);
        console.log(avatar, "------------avatar")

        const user = await Image.create({
            title,
            images: avatar.url,
        });

        return res.status(200).json({
            status: 200,
            message: "Images Uploaded Sucessfully",
            data: user
        });

    } catch (error) {
        console.log(error, '>>>>>>>>>>>>>');
        return res.status(400).json({
            status: 400,
            message: error.message,
            data: []
        });

    }
});

const getAllImages = (async (_, res) => {

    try {

        const images = await Image.find();

        res.status(200).send({
            status: 200,
            message: "Images get Sucessfully",
            data: images
        });

    } catch (error) {

        res.status(400).status({
            status: 400,
            message: error.message,
            data: []

        });

    }

});

const getUpdateImages = (async (req, res) => {
    try {
        const { id } = req.params
        const imageReplacePath = req.file?.path;

        if (!id) {
            res.status(400).send({
                status: 400,
                message: "_id is not find"
            })
        }

        if (!imageReplacePath) {
            res.status(400).json({
                status: 400,
                message: "Replace Image is required"
            })
        }

        const userurl = await uploadOnCloudinary(imageReplacePath);

        const image = await Image.findById(id);

        image.images = userurl.url
        await image.save();

        console.log("updatedimage", image);

        res.status(200).send({
            status: 200,
            message: "image Replace Sucessuflly",
            data: image
        })

    } catch (error) {

        console.log("error", error);

    }
});

const deleteImages = (async (req, res) => {

    try {
        const { id } = req.params
        if (!id) {
            res.status(400).send({
                status: 400,
                message: "_id is not find"
            })
        }
        const image = await Image.findByIdAndDelete(id)
        res.status(200).send({
            status: 200,
            message: "Image Delete Sucessfully",
            data: image
        });

    } catch (error) {

        console.log("eoorrrr", error.message);

    }

});


module.exports = { imagescollectionData, getAllImages, getUpdateImages, deleteImages }