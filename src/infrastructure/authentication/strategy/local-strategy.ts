import { Strategy } from 'passport-local'
import bcrypt from 'bcrypt'
import boom from '@hapi/boom'

// import UserService from '../../../application/services/user-service'
import { IUserRepository } from '../../../domain/repositories/iuser-repository'
import { SequelizeUserRepository } from './../../database/repositories/sequelize-user-repository'
const userRepository: IUserRepository = new SequelizeUserRepository()

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async (userEmail, userPassword, done) => {
    try {
      const user: any = await userRepository.findByEmail(userEmail)
      if (user == null) {
        done(boom.unauthorized(), false)
      }
      const isMatch = await bcrypt.compare(userPassword, user.password)
      if (!isMatch) {
        done(boom.unauthorized(), false)
      }
      delete user.dataValues.password
      done(null, user)
    } catch (error) {
      done(error, false)
    }
  })

export default LocalStrategy
