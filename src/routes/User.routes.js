const express = require('express');
const router = express.Router();
const User = require('./../models/user.model')


router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        // Check if user exists
        const existingUser = await User.findOne({ email: data.email });
        //If voter already signed up
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // if user not exist
        else {
            const newPerson = new User(data);
            await newPerson.save();
            res.status(201).json({ message: 'User created successfully' });
        }
    }
    catch {
        console.log(err);
        res.status(500).json({ error: "server error" });
    }
})



module.exports = router