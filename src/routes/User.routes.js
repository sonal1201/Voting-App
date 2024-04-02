const express = require('express');
const router = express.Router();
const User = require('./../models/user.model')


router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        // Check if user exists
        const existingUser = await User.findOne({ email: data.email, mobile: data.mobile });
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
        res.status(500).json({ error: "server error" });
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ mobile: req.body.mobile });
        if (!user) return res.status(400).json('mobile number not exist');

        const validPassword = await User.findOne({ password: req.body.password });
        if (!validPassword) return res.status(400).json('Invalid password');

        if (user && validPassword) {
            res.status(201).json({ message: "login sucessfully" })
        }
    } catch (err) {
        res.status(500).json({ error: "server error" });
    }
});

router.get('/login/profile', async (req, res) => {
    try {
        const getProfile = req.body;
        const existingUser = await User.findOne({ voterId: getProfile.voterId });
        if (existingUser) {
            return res.status(200).json(existingUser);
        }
        else {
            return res.status(400).json({ msg: "User not found" })
        }
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }


})

module.exports = router