const mongoose = require('mongoose');
const {Schema} = mongoose;

const ListSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
        minlength: [10, "Please provide at least 10 characters for title"]
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
        minlength: [10, "Please provide at least 20 characters for description"]

    },
    author: {
        //Relation and cascade issue to resolve after
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    shared_with: {
        type: String,
        default: "public",
        enum: ["admin", "author", "public"]
    },
    createdAt: {
        type: Date,
        default: Date.now

    }, updatedAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("List",ListSchema)