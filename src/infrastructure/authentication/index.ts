import passport from 'passport'

import LocalStrategy from './strategy/local-strategy'
import JwtStrategy from './strategy/jwt-strategy'

passport.use(LocalStrategy)
passport.use(JwtStrategy)

export default passport
