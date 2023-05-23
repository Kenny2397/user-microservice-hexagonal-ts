"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.lastName = props.lastName;
        this.identifier = props.identifier;
        this.phone = props.phone;
        this.email = props.email;
        this.password = props.password;
        this.roleId = props.roleId;
        this.createdAt = props.createdAt;
    }
}
exports.UserModel = UserModel;
