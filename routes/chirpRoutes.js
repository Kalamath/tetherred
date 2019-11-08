const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../db");

//get all chirps from db.Chirps 
//routes to "/api/chirps/all"
router.route("/all", function(req, res) {
    db.Chirps.find({})
    .sort({ date: -1 })
    .then( dbchirps => {
        res.json(dbchirps)
    }).catch( err => {
        console.log(err);
        res.sendStatus(500);
    })
});


router.route("/post", function(req, res) {
    db.Chirps.create(req.body)
    .then(dbchirp => {
        res.json(dbchirp)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
});

module.exports = router;