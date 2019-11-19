const mongoose = require("mongoose");

const cardFeedSchema = new mongoose.Schema({

    cardTitle: {
        type: String,
        required: true
    },

    cardContent: {
        type: String,
        required: true
    },

    cardLink: {
        type: Date,
        default: Date.now
    },
    
    cardPic: {
        type: Date,
        default: Date.now
    }
});

const cardFeedModel = mongoose.model("CardFeed", cardFeedSchema);

module.exports = cardFeedModel;