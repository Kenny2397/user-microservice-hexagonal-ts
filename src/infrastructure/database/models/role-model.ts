import { Model, DataTypes } from 'sequelize'
import { RoleEntity } from './../../entities/role-entity'
export const ROLE_TABLE = 'roles'

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
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}
type RoleCreationAttributes = Omit<RoleEntity, 'id' | 'createdAt'>

export class Role extends Model<RoleEntity, RoleCreationAttributes> {
  public id!: number
  public name!: string
  public description!: string
  public readonly createdAt!: Date

  public static associate (models: any): void {
    // associate
    this.hasMany(models.User, {
      as: 'users',
      foreignKey: {
        name: 'roleId',
        field: 'role_id'
      }
    })
  }

  public static config (sequelize: any): any {
    return {
      sequelize,
      tableName: ROLE_TABLE,
      modelName: 'Role',
      timestamps: false
    }
  }
}
