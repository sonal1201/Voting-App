const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: Stringm,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
    },
    mobile: {
        type: String
    },
    address: {
        type: String,
        require: true
    },
    aadharCardNumber: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['voter', 'admin'],
        default: 'voter'
    },
    isVoted: {
        type: Boolean,
        default: false
    }
})
const User = mongoose.model('User', userSchema)
module.exports = User;