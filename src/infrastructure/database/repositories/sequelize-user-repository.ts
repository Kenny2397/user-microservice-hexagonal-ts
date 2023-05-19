import User from './../models/user-model'
import { User as UserDomain } from './../../../domain/models/user'
import { UserRepository } from './../../../domain/repositories/user-repository'

class SequelizeUserRepository implements UserRepository {
  public async create (userData: Omit<UserDomain, 'id'>): Promise<User> {
    return await User.create(userData)
  }

  public async findAll () {
    return await User.findAll()
  }

  public async findById (id: number) {
    return await User.findByPk(id)
  }

  public async findByEmail (email: string) {
    return await User.findOne({ where: { email } })
  }

  public async update (id: number, userData: Omit<any, 'id'>): Promise<any> {
    return await User.update(userData, { where: { id } })
  }

  public async delete (id: number): Promise<void> {
    await User.destroy({ where: { id } })
  }
}

export default SequelizeUserRepository
