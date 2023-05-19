import User, { UserSchema } from './models/user-model'
import Role, { RoleSchema } from './models/role-model'

export function setupModels (sequelize: any) {
  Role.init(RoleSchema, Role.config(sequelize))
  User.init(UserSchema, User.config(sequelize))

  Role.associate(sequelize.models)
  User.associate(sequelize.models)
}
