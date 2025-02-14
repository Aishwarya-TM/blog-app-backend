const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        author : {
            type : String,
            required : true
        },
        date : {
            type : Date,
            required : true
        },
        content : {
            type : String,
            required : true
        },
        category : {
            type: String,
            required : true
        }
    },
    {
        collection : "BlogApplication"
    }
)

module.exports = mongoose.model("BlogApplication",blogSchema)