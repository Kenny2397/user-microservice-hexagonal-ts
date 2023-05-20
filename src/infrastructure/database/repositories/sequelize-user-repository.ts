import User from './../models/user-model'
import { IUserDTO } from '../../../application/dtos/user-dto'
import { User as UserDomain } from '../../../domain/models/user'
import { UserRepository } from './../../../domain/repositories/user-repository'

class SequelizeUserRepository implements UserRepository {
  public async create (payload: IUserDTO): Promise<UserDomain> {
    return await User.create(payload)
  }

  public async findAll (): Promise<UserDomain[]> {
    return await User.findAll()
  }

  public async findById (id: number): Promise<UserDomain | null> {
    return await User.findByPk(id)
  }

  public async findByEmail (email: string): Promise<UserDomain | null> {
    return await User.findOne({ where: { email } })
  }

  public async update (id: number, payload: IUserDTO): Promise<any> {
    return await User.update(payload, { where: { id } })
  }

  public async delete (id: number): Promise<void> {
    await User.destroy({ where: { id } })
  }
}

export default SequelizeUserRepository
