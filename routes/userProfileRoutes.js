const express = require("express");
const router = express.Router();
const UserProfile = require("../db/userProfile");
const axios = require("axios");


router.post("/:email", function (req, res) {
    UserProfile.create( {
        email: req.params.email,
        name: "neil armstrong", //req.body.name
        description: "The inventor of actual moonwalk" //req.body.description
    })
    .then( dbProfile => {
        console.log(`posting userProfile ${dbProfile}`);
        res.json(dbProfile)
    }).catch( err => {
        console.log(err);
    })
});

router.get("/:email", function( req, res) {
    UserProfile.findOne({ email: req.params.email })
    .then( dbProfile => {
        console.log(dbProfile);
        res.json(dbProfile);
    }).catch( err => {
        console.log(err);
    })
});


module.exports = router;