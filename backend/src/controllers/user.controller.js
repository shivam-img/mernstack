const User = require("../models/user.model.js");
const Rating = require("../models/productRating.js");
const asyncHandler = require("../utils/asynchandler.js");
const uploadOnCloudinary = require("../utils/cloudinary.js");
const { getProductRatingsWithAverage } = require("../services/ratingService.js");
// cosnt getProductRatingsWithAverage



const generateAccessAndRefereshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
       
        await user.save({ validateBeforeSave: false })

        return { accessToken }


    } catch (error) {
        return res.status(500).send({
            message: "Something went wrong while generating referesh and access token"
        })
    }
}


const registreUser = (async (req, res) => {
    try {

        const { fullName, email, username, password } = req.body

        if (
            [fullName, email, username, password].some((field) => field?.trim() === "")
        ) {
            return res.status(400).send({
                status: false,
                message: "All fields are required"
            })
        }
        const existedUser = await User.findOne({
            $or: [{ username }, { email }]
        })

        if (existedUser) {
            return res.status(400).send({
                status: false,
                message: "User with email or username already exists"
            })

        }

        const avatarLocalPath = req.files?.avatar[0]?.path;
        console.log("avatarLocalPath" , avatarLocalPath);

        let coverImageLocalPath;
        if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
            coverImageLocalPath = req.files?.coverImage[0]?.path
        }

        if (!avatarLocalPath) {
            return res.status(400).send({
                status: false,
                message: 'Avatar file is required'
            })
        }

        const avatar = await uploadOnCloudinary(avatarLocalPath);
        const coverImage = await uploadOnCloudinary(coverImageLocalPath);

        if (!avatar) {
            return res.status(400).send({
                status: false,
                message: 'Avatar file is required'
            })
        }

        const user = await User.create({
            fullName,
            avatar: avatar.url,
            coverImage: coverImage?.url || "",
            email,
            password,
            username: username.toLowerCase()
        })
        delete user.password

        return res.status(200).json(
            {
                status: 200,
                message: "User registered Successfully",
                data: user
            }

        )
    } catch (error) {
        return res
            .status(400)
            .json(
                {
                    status: 400,
                    message: error.message,
                    data: []
                }
            )
    }
});

const loginUser = asyncHandler(async (req, res) => {

    try {
        const { email, username, password } = req.body
        if (!username && !email) {
            res.status(400).send({
                status: 400,
                message: "username or email is required"
            })
        }

        const user = await User.findOne({
            $or: [{ username }, { email }]
        })

        if (!user) {
            res.status(404).send({
                status: 404,
                message: "User does not exist"
            })
        }

        const isPasswordValid = await user.isPasswordCorrect(password)

        if (!isPasswordValid) {
            res.status(401).send({
                status: 401,
                message: "Invalid user credentials"
            })
        }

        const { accessToken} = await generateAccessAndRefereshTokens(user._id)

        const loggedInUser = await User.findById(user._id).select("-password")

        const options = {
            httpOnly: true,
            secure: true
        }

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .json(
                {
                    status: 200,
                    message: "User logged In Successfully",
                    user: loggedInUser, accessToken
                }
            )

    } catch (error) {

        return res
            .status(400)
            .json(
                {
                    status: 400,
                    message: error.message,
                    data: []
                }
            )

    }
})

const getCurrentUser = (async (req, res) => {
    try {
        return res.status(200).json(
            {
                status: 200,
                message: "User fetched successfully",
                data: req.user
            }
        )

    } catch (error) {
        return res
            .status(400)
            .json(
                {
                    status: 400,
                    message: error.message,
                    data: []
                }
            )
    }
});

const getUserLogout = (async (req, res) => {
    try {
        // console.log('req.user', req.user._id)

        const user = await User.findByIdAndUpdate(req.user._id, {
            accessToken: "",
        })
        const options = {
            httpOnly: true,
            secure: true
        }

        return res
            .status(200)
            .clearCookie("accessToken", options)
            .json({
                status: 200,
                message: "User logout Sucessfully",
            });

    } catch (error) {


        return res.status(200).json({
            status: 400,
            message: error.message,
            data: []
        });

    }
});

const getUserChangePasswords = async(req , res) => {

    const {currentPassword , UpdatedPasswaord , confirmPasswords} = req.body

    console.log({currentPassword , UpdatedPasswaord , confirmPasswords});

}

const GetRatingFromUser = async(req , res) => {
    const {rating,product} = req.body
        console.log('req.user', req.user._id)

    const ratingData =  await Rating.create({
        user: req.user._id,
        rating,
        product
    });
    return res.status(200).json(
        {
            status: 200,
            message: "User fetched successfully",
            data: ratingData
        }
    )
}


module.exports = { registreUser, loginUser, getCurrentUser, getUserLogout , getUserChangePasswords , GetRatingFromUser };

