const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "Please provide a name"]
    }, lastName: {
        type: String,
        required: [true, "Please provide a name"]
    }, // String is shorthand for {type: String}
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please provide a valid email "
        ]
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "moderator"]
    },
    password: {
        type: String,
        minlength: [8, "Please provide a password with min length : 8"],
        required: [true, "Please provide a password"],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    about: String,
    place: String,
    website: String,
    profile_image: {
        type: String,
        default: "default.jpg"
    },
    blocked: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpire: {
        type: Date
    }
});

module.exports = mongoose.model("User", UserSchema)