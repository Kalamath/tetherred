const express = require("express");
const router = express.Router();
const UserProfile = require("../db/userProfile");
const axios = require("axios");


router.post("/:id", function (req, res) {
    console.log(req.user);
    UserProfile.create( {
        userId: req.params.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        location: req.body.location,
        hobbies: req.body.hobbies

    })
    .then( dbProfile => {
        console.log(`posting userProfile ${dbProfile}`);
        res.json(dbProfile)
    }).catch( err => {
        console.log(err);
    })
});

router.get("/:id", function( req, res) {
    // console.log("req.user @ profile get" + req.user);
    UserProfile.findOne({ userId: req.params.id})
    .then( dbProfile => {
        console.log(`res for get profile ${dbProfile}`);
        res.send(dbProfile);
    }).catch( err => {
        console.log(err);
    })
});


module.exports = router;