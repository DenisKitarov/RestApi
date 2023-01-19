const passport = require('../loader/Passport');

module.exports = passport.authenticate('jwt', {session: false});