const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    party: {
        type: String,
        require: true
    },
    age: {
        type: number,
        require: true
    }
})
const candidate = mongoose.model('candidate', candidateSchema)
module.exports = candidate;