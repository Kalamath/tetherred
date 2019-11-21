const express = require("express");
const router = express.Router();
const CardFeed = require("../db/CardFeed");



//get all CardFeed from db.CardFeed 
//routes to "/api/CardFeed"
router.get("/all", function (req, res) {

    CardFeed.find({})
        .sort({ date: -1 }) // sorts by latest first 
        .then(dbCardFeed => {
            res.json(dbCardFeed)
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
});

// posts new CardFeed from db.CardFeed 
//routes to "/api/CardFeed"
router.post("/post", function (req, res) {
    console.log(`username ${req.user.username}`);
    console.log(req.body);
    CardFeed.create({
        author: req.user.username,
        body: req.body.body
    })
        .then(dbCardFeed => {
            res.json(dbCardFeed);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
});


module.exports = router;