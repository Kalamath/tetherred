const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3001;

// passport js 
var passport = require('passport'); //
var session = require('express-session'); //

//middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Next, we initialize passport and the express session and passport session and add them both as middleware
// For Passport
app.use(session({ 
    secret: 'keyboard cat', 
    resave: true, 
    saveUninitialized: true 
})); 

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions


// Models
var db = require("./db");
//load passport strategies
require('./config/passport/passport.js')(passport, db.User); 

// Auth Routes
var authRoute = require('./routes/authRoutes.js')(app, passport); 


// const routes = require("./routes");
// app.use(routes);



// router.use(function(req, res) {
//     res.sendfile(path.join(__dirname, "../client/build/index.html"));
// });


//Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, () => {
    console.log(`🌎 ==> API server listening on port ${PORT}!`);
});