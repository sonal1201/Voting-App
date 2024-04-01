const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
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
    voterId: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    isVoted: {
        type: Boolean,
        default: false
    }
})
const User = mongoose.model('User', userSchema)
module.exports = User;