const mongoose = require('./connection');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;