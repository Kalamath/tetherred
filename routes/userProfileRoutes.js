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

router.get("/:email", function( req, res) {
    UserProfile.findOne({ email: req.params.email })
    .then( dbProfile => {
        console.log(dbProfile);
        res.json(dbProfile)
    }).catch( err => {
        console.log(err);
        res.sendStatus(500);
    })
});


module.exports = router;