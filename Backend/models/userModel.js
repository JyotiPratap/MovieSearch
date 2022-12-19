const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('User_Project4', userSchema)