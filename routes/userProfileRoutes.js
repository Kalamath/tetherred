const express = require("express");
const router = express.Router();
const UserProfile = require("../db/userProfile");
const axios = require("axios");


router.post("/", function (req, res) {
    UserProfile.create(req.body)
    .then( dbProfile => {
        res.json(dbProfile)
    }).catch( err => {
        console.log(err);
        res.sendStatus(500);
    })
});

router.get("/", function( req, res) {
    UserProfile.findOne({ email: req.user.email })
    .then( dbProfile => {
        res.json(dbProfile)
    }).catch( err => {
        console.log(err);
        res.sendStatus(500);
    })
});


module.exports = router;