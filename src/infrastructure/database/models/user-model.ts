import { Model, DataTypes, Optional } from 'sequelize'
import { User as UserDomain } from './../../../domain/models/user'

import { ROLE_TABLE } from './role-model'

export const USER_TABLE = 'users'

export type UserCreationAttributes = Optional<UserDomain, 'id'>

export const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    field: 'last_name',
    allowNull: false,
    type: DataTypes.STRING
  },
  identifier: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      is: /^(\+)?\d{1,13}$/
    }
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  roleId: {
    field: 'role_id',
    type: DataTypes.INTEGER,
    references: {
      model: ROLE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}

class User extends Model<UserDomain, UserCreationAttributes> implements UserDomain {
  public id!: number
  public name!: string
  public lastName!: string
  public identifier!: bigint
  public phone!: string
  public email!: string
  public password!: string
  public roleId!: number
  public readonly createdAt!: Date

  static associate (models: any) {
    // associate
    this.belongsTo(models.Role, {
      as: 'role'
    })
  }

  static config (sequelize: any) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

export default User
