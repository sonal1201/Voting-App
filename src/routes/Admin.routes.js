const express = require('express')
const adminRouter = express.Router();
const User = require('./../models/user.model')

adminRouter.get('/voters', async (req, res) => {
    try {
        const allUser = await User.find({})
        if (allUser) {
            return res.status(200).json({ allUser })
        }
        else {
            res.status(200).json({ msg: "No Voter found" });
        }
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
})


module.exports = adminRouter; 