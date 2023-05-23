export interface IUserProps {
  id?: number
  name: string
  lastName: string
  identifier: number
  phone: string
  email: string
  password: string
  roleId?: number
  createdAt?: Date
}

export class UserModel {
  public readonly id?: number
  public readonly name: string
  public readonly lastName: string
  public readonly identifier: number
  public readonly phone: string
  public readonly email: string
  public readonly password: string
  public readonly roleId?: number
  public readonly createdAt?: Date

  constructor (props: IUserProps) {
    this.id = props.id
    this.name = props.name
    this.lastName = props.lastName
    this.identifier = props.identifier
    this.phone = props.phone
    this.email = props.email
    this.password = props.password
    this.roleId = props.roleId
    this.createdAt = props.createdAt
  }
}
