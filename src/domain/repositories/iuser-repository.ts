import { UserModel } from '../models/iuser-model'

export interface IUserRepository {
  findById: (id: number) => Promise<UserModel | null>
  findByEmail: (email: string) => Promise<UserModel | null>
  save: (userData: UserModel) => Promise<UserModel>
  update: (id: number, userData: UserModel) => Promise<any>
  delete: (id: number) => Promise<void>
  findAll: () => Promise<UserModel[]>
}
