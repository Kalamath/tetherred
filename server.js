require('dotenv').config(); 
const express = require("express");
const app = express();
const path = require("path");
const dbconnection = require("./db");
// const newsroute = require(“./routes/newsRoutes”);

const PORT = process.env.PORT || 3001;

// passport js and session
var passport = require('./config/passport/passport'); 
var session = require('express-session'); 
const MongoStore = require("connect-mongo")(session);


//middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Next, we initialize passport and the express session and passport session and add them both as middleware
// For Passport
app.use(session({ 
    secret: 'keyboard cat', 
    store: new MongoStore({ mongooseConnection: dbconnection }),
    resave: false, 
    saveUninitialized: false 
})); 

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


const routes = require("./routes");
app.use(routes);



//Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server listening on port ${PORT}!`);
});