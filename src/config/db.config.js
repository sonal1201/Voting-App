const mongoose = require('mongoose');
const { DATABASE } = require('./server.config');
async function connectToDB() {
    try {
        await mongoose.connect(DATABASE);
    } catch (error) {
        console.log("Unable to connect to the DB server");
        console.log(error);
    }
}

module.exports = connectToDB;