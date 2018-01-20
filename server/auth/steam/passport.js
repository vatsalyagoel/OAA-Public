import passport from 'passport';
import {Strategy as SteamStrategy} from 'passport-steam';

export function setup(User, config) {
  console.log(config.steam.realm);
  passport.use(new SteamStrategy({
    realm: config.steam.realm,
    returnURL: config.steam.returnURL,
    apiKey: config.steam.apiKey
  },
  function(identifier, profile, done) {
    User.findOne({'email': profile._json.steamid}).exec()
      .then(user => {
        if(user) {
          return done(null, user);
        }
        console.log(profile);
        console.log(identifier);
        user = new User({
          name: profile._json.realname,
          email: profile._json.steamid,
          role: 'user',
          provider: 'steam',
          steam: profile._json
        });
        user.save()
          .then(savedUser => done(null, savedUser))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));
}
