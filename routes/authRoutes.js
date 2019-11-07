// const express = require("express");

module.exports = function (app, passport) {


    // Session start call
    app.get('/api/sessions/start', (req, res) => {
        res.json({
            isLoggedIn: req.session.isLoggedIn || false
        })
    });

    // post route for signing-up new user 
    app.post('/api/sessions/signup', function (req, res, next) {
        passport.authenticate('local-signup', function (err, user, info) {
            if (err) {
                return next(err); // will generate a 500 error
            }
            // Generate a JSON response reflecting signup
            if (req.session.isLoggedIn = false) {
                return res.json({ success: false, message: 'signup failed' });
            }
            return res.json({ success: true, message: 'signup succeeded' });
        })(req, res, next);
    });


    // post route for login req 
    app.post('/api/sessions/signin', function (req, res, next) {
        passport.authenticate('local-signin', function (err, user, info) {
            if (err) {
                return next(err); // will generate a 500 error
            }
            // Generate a JSON response reflecting signup
            if (req.session.isLoggedIn = false) {
                return res.send({ success: false, message: 'signin failed' });
            }
            return res.send({ success: true, message: 'signin succeeded' });
        })(req, res, next);
    });


    //logout route
    app.get('/api/sessions/logout', (req, res) => {
        req.session.destroy(() => {
            res.json({ success: true });
        });
    });


    // app.post('/api/sessions/signin', (req, res) => {
    //     /**
    //      * CHANGE THIS BELOW TO LOOKUP THE USER BY EMAIL AND VERIFY THEIR PASSWORD HASH
    //      * USING BCRYPT
    //      */
    //     const SECRET_EMAIL = 'secret@email.com';
    //     const SECRET_PASSWORD = 'test123';

    //     if (req.body.email === SECRET_EMAIL && req.body.password === SECRET_PASSWORD) {
    //         req.session.isLoggedIn = true;
    //         res.json({
    //             success: true
    //         })
    //     } else {
    //         req.session.isLoggedIn = false;
    //         res.json({
    //             success: false
    //         })
    //     }
    // });

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }
}

