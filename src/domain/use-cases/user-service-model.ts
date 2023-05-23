import { UserModel } from '../models/iuser-model'
import { IUserRepository } from '../repositories/iuser-repository'
// import { SequelizeUserRepository } from '../../infrastructure/database/repositories/sequelize-user-repository'

export class UserServiceModel {
  public readonly _iUserRepository: IUserRepository

  constructor (iUserRepository: IUserRepository) {
    this._iUserRepository = iUserRepository
  }

  async createUser (userModel: UserModel): Promise<UserModel> {
    return await this._iUserRepository.save(userModel)
  }

  async findByEmail (email: string): Promise<UserModel | null> {
    return await this._iUserRepository.findByEmail(email)
  }
}
