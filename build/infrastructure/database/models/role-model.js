"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSchema = exports.ROLE_TABLE = void 0;
const sequelize_1 = require("sequelize");
exports.ROLE_TABLE = 'roles';
exports.RoleSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    description: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT
    },
    createdAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        field: 'created_at',
        defaultValue: sequelize_1.DataTypes.NOW
    }
};
class Role extends sequelize_1.Model {
    static associate(models) {
        // associate
        this.hasMany(models.User, {
            as: 'users',
            foreignKey: {
                name: 'roleId',
                field: 'role_id'
            }
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: exports.ROLE_TABLE,
            modelName: 'Role',
            timestamps: false
        };
    }
}
exports.default = Role;
