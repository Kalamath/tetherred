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
        type: String,
        default: true
    },
    
    cardPic: {
        type: String,
        default: true
    }
});

const cardFeedModel = mongoose.model("CardFeed", cardFeedSchema);

module.exports = cardFeedModel;