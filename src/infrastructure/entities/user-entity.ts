export interface UserEntity {
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
