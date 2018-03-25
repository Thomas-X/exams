import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import User from '../global/models/User';

const cookieExtractor = (req) => {
    let token = null;
    if(req && req.cookies) {
        token = req.cookies['jwt'];
    }
    return token;
};

export default () => {
    const options = {
        jwtFromRequest: cookieExtractor,
        ignoreExpiration: true,
        secretOrKey: process.env.secretKey,
    };

    passport.use(new Strategy(options, async (jwtPayload, done) => {
        const user = (await User.find({ id: jwtPayload.sub }))[0];
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    }));
}

export const authMiddleware = passport.authenticate('jwt', { session: false });