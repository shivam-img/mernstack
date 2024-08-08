const mongoose = require("mongoose")
const scheme = mongoose.Schema

const BookSchema = new scheme({
    id : {
            type: String,
            require: true
        },
        title : {
            type: String,
            require: true
        },
        author_id : {
            type: String,
            require: true
        },
        genre : {
            type: String,
            require: true
        },
    
})

const Book = mongoose.model("Book" , BookSchema );

module.exports = Book