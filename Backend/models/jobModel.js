const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    CompanyName: {
        type: String,
        required: true,
        trim: true
    },
    Role: {
        type: String,
        required: true,
        trim: true,
    },
    Batch: {
        type: String,
        required: true,
        trim: true,
    },
    Salary:{
        type: String,
        required: true,
        trim: true,   
    },
    Location: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('User_Project5', userSchema)