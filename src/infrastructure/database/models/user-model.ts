import { Model, DataTypes, Optional } from 'sequelize'
// import { User as UserDomain } from './../../../domain/models/user'
import { UserEntity } from '../../entities/user-entity'
import { ROLE_TABLE } from './role-model'

export const USER_TABLE = 'users'

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

type UserCreationAttributes = Optional<UserEntity, 'id'>

// export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
export class User extends Model<UserEntity, UserCreationAttributes> {
  declare id: number
  declare name: string
  declare lastName: string
  declare identifier: number
  declare phone: string
  declare email: string
  declare password: string
  declare roleId: number
  declare createdAt: Date

  // constructor (user: any) {
  //   super()
  //   this.id = user.id
  //   this.name = user.name
  //   this.lastName = user.lastName
  //   this.identifier = user.identifier
  //   this.phone = user.phone
  //   this.email = user.email
  //   this.password = user.password
  //   this.roleId = user.roleId
  //   this.createdAt = user.createdAt
  // }

  static associate (models: any): void {
    // associate
    this.belongsTo(models.Role, {
      as: 'role'
    })
  }

  static config (sequelize: any): any {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}
