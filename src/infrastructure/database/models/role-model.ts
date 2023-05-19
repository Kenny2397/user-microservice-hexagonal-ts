import { Model, DataTypes, Optional } from 'sequelize'
import { Role as RoleDomain } from './../../../domain/models/role'
export const ROLE_TABLE = 'roles'

export type RoleCreationAttributes = Optional<RoleDomain, 'id'>

export const RoleSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}

class Role extends Model<RoleDomain, RoleCreationAttributes> implements RoleDomain {
  public id!: number
  public name!: string
  public description!: Text
  public readonly createdAt!: Date

  public static associate (models: any) {
    // associate
    this.hasMany(models.User, {
      as: 'users',
      foreignKey: {
        name: 'roleId',
        field: 'role_id'
      }
    })
  }

  public static config (sequelize: any) {
    return {
      sequelize,
      tableName: ROLE_TABLE,
      modelName: 'Role',
      timestamps: false
    }
  }
}

export default Role
