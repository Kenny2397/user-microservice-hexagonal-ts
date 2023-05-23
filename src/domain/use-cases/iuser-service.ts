import { UserModel } from '../models/iuser-model'

export interface IUserService {
  createUser: (userModel: UserModel) => Promise<UserModel>
  findByEmail: (email: string) => Promise<UserModel | null>
}
