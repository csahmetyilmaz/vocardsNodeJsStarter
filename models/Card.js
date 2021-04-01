const mongoose = require('mongoose');
const {Schema} = mongoose;

const CardSchema = new Schema({
    word: {
        type: String,
        required: [true, "Please provide a word"],
        minlength: [1, "Please provide at least 1 character for title"]
    },
    t_word: {
        type: String,
        required: [true, "Please provide a translation of word"],
        minlength: [1, "Please provide at least 1 character for title"]
    },
    word_details: {
        type: String,
        required: [true, "Please provide a word"],
        minlength: [1, "Please provide at least 1 character for title"]
    },
    t_word_details: {
        type: String,
        required: [true, "Please provide a translation of word"],
        minlength: [1, "Please provide at least 1 character for title"]
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

module.exports = mongoose.model("Card",CardSchema)