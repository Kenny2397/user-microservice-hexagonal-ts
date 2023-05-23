import { User } from './../models/user-model'
// import { IUserDTO } from '../../../application/dtos/user-dto'
import { UserModel } from '../../../domain/models/iuser-model'
import { IUserRepository } from '../../../domain/repositories/iuser-repository'

export class SequelizeUserRepository implements IUserRepository {
  public async save (payload: UserModel): Promise<UserModel> {
    return await User.create(payload)
  }

  public async findAll (): Promise<UserModel[]> {
    return await User.findAll()
  }

  public async findById (id: number): Promise<UserModel | null> {
    return await User.findByPk(id)
  }

  public async findByEmail (email: string): Promise<UserModel | null> {
    return await User.findOne({ where: { email } })
  }

  public async update (id: number, payload: UserModel): Promise<any> {
    return await User.update(payload, { where: { id } })
  }

  public async delete (id: number): Promise<void> {
    await User.destroy({ where: { id } })
  }
}
