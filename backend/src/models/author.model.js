const mongoose = require("mongoose")
const Schema = mongoose.Schema

// const AuthorSchema = new Schema(
    const AuthorSchema = new Schema(
        {
            id: {
                type: String,
                require: true
            },
            name: {
                type: String,
                require: true
            },
            birth_year: {
                type: String,
                require: true
            }
        },
        {
            timestamps: true
        }
    );

    const  author = mongoose.model("author" , AuthorSchema);
    module.exports = author