const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../db/user');

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	// console.log('\nDeserializeUser called')
	User.findOne(
		{ _id: id },
		"username", 
		(err, user) => {
			// console.log('\n*** Deserialize user, user:')
			// console.log(user)
			done(null, user)
		}
	)
})

//  Use Strategies 
passport.use( new LocalStrategy(
	{
		usernameField: 'email' // not necessary, DEFAULT
	},
	function(username, password, done) {
		User.findOne({ email: username  }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
))

module.exports = passport;