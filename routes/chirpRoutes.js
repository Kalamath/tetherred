const express = require("express");
const router = express.Router();
const Chirps = require("../db/chirps");



    //get all chirps from db.Chirps 
    //routes to "/api/chirps"
    router.get("/all", function (req, res) {

        Chirps.find({})
            .sort({ date: -1 }) // sorts by latest first 
            .then(dbchirps => {
                res.json(dbchirps)
            }).catch(err => {
                console.log(err);
                res.sendStatus(500);
            })
    });

    // posts new chirps from db.Chirps 
    //routes to "/api/chirps"
    router.post("/post", function (req, res) {
        // console.log(`username ${req.user.username}`);
        // console.log(req.body);
        Chirps.create({
            author: req.user.username,
            body: req.body.body
        })
            .then(dbchirps => {
                res.json(dbchirps);
            }).catch(err => {
                console.log(err);
                res.sendStatus(500);
            })
    });


module.exports = router;