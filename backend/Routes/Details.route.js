// const express = require('express');
// const UserModel = require('../Models/UserModel');

// const userDetailsRouter = express.Router();

// userDetailsRouter.get('/' , async(req,res)=>{
//     try {
//         console.log("req is" , req.body);
//         const details = await UserModel.find({ownID : req.body.userID});
//         res.status(200).send(details);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(404).send({"msg" : "Please Login Bro"})
//     }
// })


const express = require('express');
const userDetailsRouter = express.Router();
const authenticate = require('../Middlewares/authenticate');
const UserModel = require('../Models/UserModel');

// Protected route to fetch user details
userDetailsRouter.get('/', authenticate, async (req, res) => {
    try {
        const user = await UserModel.findById(req.userID);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Only return necessary details to the client
        const userDetails = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            mobile_no: user.mobile_no,
            city: user.city,
        };
        res.status(200).json(userDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = userDetailsRouter;

