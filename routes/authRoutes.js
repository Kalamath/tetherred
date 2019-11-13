const express = require("express");
const router = express.Router();
const User = require("../db/user");
const passport = require("../config/passport/passport");


// Session start call
router.get('/start', (req, res) => {
    res.json({
        isLoggedIn: req.session.isLoggedIn || false
    })
});


router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log("req.user @ / : " + req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
});

// post route for signing-up new user 
router.post('/signup', (req, res) => {
    console.log('user signup');

    const { email, password } = req.body;
    console.log("signup req.body :" + req);
    // ADD VALIDATION
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${email}`
            })
        }
        else {
            const newUser = new User({
                email: email,
                password: password
            })
            newUser.save((err, savedUser) => {
                console.log(savedUser);
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})


// post route for sign-in req 
router.post(
    '/signin',
    function (req, res, next) {
        console.log('routes/signin, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            email: req.user.email,
            id: req.user._id
        };
        res.send(userInfo);
    }
)


//logout route
router.post('/logout', (req, res) => {
    if (req.user) {
        console.log("req.user before logout :" + req.user);
        req.logout();
        res.send({ msg: "logging out" })
    } else {
        res.send({ msg: "no user to log out " })
    }
});



    // // post route for signing-up new user 
    // app.post('/api/sessions/signup', function (req, res, next) {
    //     passport.authenticate('local-signup', function (err, user, info) {
    //         if (err) {
    //             return next(err); // will generate a 500 error
    //         }
    //         // Generate a JSON response reflecting signup
    //         if (req.session.isLoggedIn = false) {
    //             return res.send({ success: false, message: 'signupfailed' });
    //         }
    //         return res.send({ success: true, message: 'signup succeeded' });
    //     })(req, res, next);
    // });


    // // post route for login req 
    // app.post('/api/sessions/signin', function (req, res, next) {
    //     passport.authenticate('local-signin', function (err, user, info) {
    //         if (err) {
    //             return next(err); // will generate a 500 error
    //         }
    //         // Generate a JSON response reflecting signup
    //         if (req.session.isLoggedIn = false) {
    //             return res.send({ success: false, message: 'signupfailed' });
    //         }
    //         return res.send({ success: true, message: 'signup succeeded' });
    //     })(req, res, next);
    // });

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }
