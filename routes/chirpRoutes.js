const mongoose = require("mongoose");
const db = require("../db");

module.exports = function (app) {

    //get all chirps from db.Chirps 
    //routes to "/api/chirps"
    app.get("/api/chirps/all", function (req, res) {

        db.Chirps.find({})
            .sort({ date: -1 })
            .then(dbchirps => {
                res.json(dbchirps)
            }).catch(err => {
                console.log(err);
                res.sendStatus(500);
            })
    });

    // posts new chirps from db.Chirps 
    //routes to "/api/chirps"
    app.post("/api/chirps/post", function (req, res) {
        db.Chirps.create(req.body)
            .then(dbchirps => {
                res.json(dbchirps);
            }).catch(err => {
                console.log(err);
                res.sendStatus(500);
            })
    });
}
