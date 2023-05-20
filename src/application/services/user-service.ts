import boom from '@hapi/boom'
import { UserRepository } from '../../domain/repositories/user-repository'
import { RoleRepository } from '../../domain/repositories/role-repository'
import { User } from '../../domain/models/user'
import { IUserDTO } from '../dtos/user-dto'
import { hashPassword } from '../../infrastructure/encryption/hash-service'

class UserService {
  private readonly userRepository: UserRepository
  private readonly roleRepository: RoleRepository

  constructor (userRepository: UserRepository, roleRepository: RoleRepository) {
    this.userRepository = userRepository
    this.roleRepository = roleRepository
  }

  async createUser (userDto: IUserDTO): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(userDto.email)
    if (existingUser != null) {
      throw boom.conflict('Email already exists')
    }

    const hashedPassword = await hashPassword(userDto.password)
    const user: IUserDTO = {
      ...userDto,
      password: hashedPassword
    }

    const createdUser = await this.userRepository.create(user)
    return createdUser
  }

  async createOwner (userDto: IUserDTO): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(userDto.email)
    if (existingUser != null) {
      throw boom.conflict('Email already exists')
    }

    const existingRole = await this.roleRepository.findByName('Owner')
    if (existingRole == null) {
      throw boom.conflict('Role does not exist')
    }

    const hashedPassword = await hashPassword(userDto.password)
    const user: IUserDTO = {
      ...userDto,
      roleId: existingRole.id,
      password: hashedPassword
    }
    const createdUser = await this.userRepository.create(user)
    return createdUser
  }

  async createEmployee (userDto: IUserDTO): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(userDto.email)
    if (existingUser != null) {
      throw boom.conflict('Email already exists')
    }

    const existingRole = await this.roleRepository.findByName('Employee')
    if (existingRole == null) {
      throw boom.conflict('Role does not exist')
    }

    const hashedPassword = await hashPassword(userDto.password)
    const user: IUserDTO = {
      ...userDto,
      roleId: existingRole.id,
      password: hashedPassword
    }
    const createdUser = await this.userRepository.create(user)
    return createdUser
  }

  // async login (email: string, password: string): Promise<User> {
  //   const user = await this.userRepository.findByEmail(email)
  //   if (user == null) {
  //     throw boom.notFound('User not found')
  //   }

  //   const isPasswordValid = await user.isPasswordValid(password)
  //   if (!isPasswordValid) {
  //     throw boom.unauthorized('Invalid password')
  //   }

  //   return user
  // }
  async findByEmail (email: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email)
    if (user == null) {
      throw boom.notFound('User not found')
    }

    return user
  }
}

export default UserService
