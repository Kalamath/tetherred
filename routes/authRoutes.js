const express = require("express");
const router = express.Router();
const User = require("../db/user");
const passport = require("../config/passport/passport");


// Session start call
router.get('/start', (req, res) => {
    console.log("req @ /start" + req.user);
    res.json({
        isLoggedIn: req.session.isLoggedIn || false
    })
});

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log("req.user @ / : " + req.user);
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


// post route for login req 
router.post(
    '/signin',
    function (req, res, next) {
        console.log('routes/signin, req.body: ');
        console.log(req.body);
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

module.exports = router;
