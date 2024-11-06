const mongoose = require('mongoose');
// const Rating = require('../models/Rating'); // Adjust the path to your Rating model
const User = require("../models/user.model")

const getProductRatingsWithAverage = async () => {
  try {
    const aggregationPipeline = [
      {
        $lookup: {
          from: "ratings",
          localField: "_id",
          foreignField: "product",
          as: "product_rating"
        }
      },
      {
        $unwind: "$product_rating"
      },
      {
        $group: {
          _id: "$_id",
          image: { $first: "$image" },
          discountPriceOff: { $first: "$discountPriceOff" },
          heading: { $first: "$heading" },
          description: { $first: "$description" },
          actualPrice: { $first: "$actualPrice" },
          discountedPrice: { $first: "$discountedPrice" },
          createdAt: { $first: "$createdAt" },
          updatedAt: { $first: "$updatedAt" },
          __v: { $first: "$__v" },
          averageRating: { $avg: "$product_rating.rating" }
        }
      },
      {
        $project: {
          _id: 1,
          image: 1,
          discountPriceOff: 1,
          heading: 1,
          description: 1,
          actualPrice: 1,
          discountedPrice: 1,
          createdAt: 1,
          updatedAt: 1,
          __v: 1,
          rating: { $round: ["$averageRating", 1] }
        }
      }
    ];

    const result = await User.aggregate(aggregationPipeline);
    console.log("UserUserUser" ,result);
    return result;
  } catch (error) {
    throw new Error('Error fetching product ratings with average: ' + error.message);
  }
};

module.exports = {
  getProductRatingsWithAverage
};
