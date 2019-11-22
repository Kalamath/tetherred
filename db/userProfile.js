const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
    },

    dob: {
        type: String,
    },

    location: {
        type: String
    },

    hobbies: {
        type: String
    }

});

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

module.exports = UserProfile;