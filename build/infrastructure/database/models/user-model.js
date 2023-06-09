"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.USER_TABLE = void 0;
const sequelize_1 = require("sequelize");
const role_model_1 = require("./role-model");
exports.USER_TABLE = 'users';
exports.UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    lastName: {
        field: 'last_name',
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    identifier: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    phone: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        validate: {
            is: /^(\+)?\d{1,13}$/
        }
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    roleId: {
        field: 'role_id',
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: role_model_1.ROLE_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        field: 'created_at',
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    }
};
class User extends sequelize_1.Model {
    static associate(models) {
        // associate
        this.belongsTo(models.Role, {
            as: 'role'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: exports.USER_TABLE,
            modelName: 'User',
            timestamps: false
        };
    }
}
exports.default = User;
