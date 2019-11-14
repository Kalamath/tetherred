const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
    }

});

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

module.exports = UserProfile;