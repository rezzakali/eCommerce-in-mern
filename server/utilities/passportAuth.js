// external imports
import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// google
passport.use(
  new GoogleStrategy(
    {
      clientID:
        '198800464323-2mreq9dv2ke5gfuf5db4bg31pgrpa6h0.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:5000/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      //  if you want to save data
      const user = {
        id: profile.id,
        username: profile.displayName,
        avatar: profile.photos[0].value,
      };
      console.log(user);
    }
  )
);

// github

passport.use(
  new GitHubStrategy(
    {
      clientID: '87ae82e429fa8379fa17',
      clientSecret: 'ffbbd4f1aa8e7b4b97a9cd7987ce30940be48742',
      callbackURL: 'http://localhost:5000/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
