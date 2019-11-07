const mongoose = require("mongoose");

const ChirpsSchema = new mongoose.Schema ({

    chirpAuthor: {
        type: String,
        required: true
    },

    chirpBody: {
        type: String,
        required: true
    },

    date: { 
        type: Date, 
        default: Date.now },
    
});

const ChirpsModel = mongoose.model("Chirps", ChirpsSchema);

module.exports = ChirpsModel;