const mongoose = require("mongoose");

const ChirpsSchema = new mongoose.Schema({

    author: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

});

const ChirpsModel = mongoose.model("Chirps", ChirpsSchema);

module.exports = ChirpsModel;