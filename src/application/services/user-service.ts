import boom from '@hapi/boom'
import { UserModel } from '../../domain/models/iuser-model'
import { IUserDTO } from '../dtos/user-dto'
import { hashPassword } from '../../infrastructure/encryption/hash-service'
// import { IUserService } from '../../domain/use-cases/iuser-service'
import { IUserRepository } from '../../domain/repositories/iuser-repository'
import { IRoleRepository } from '../../domain/repositories/irole-repository'

export class UserService {
  private readonly userRepository: IUserRepository
  private readonly roleRepository: IRoleRepository

  constructor (userService: IUserRepository, roleService: IRoleRepository) {
    this.userRepository = userService
    this.roleRepository = roleService
  }

  async createUser (userDto: IUserDTO): Promise<UserModel> {
    console.log('application')
    const existingUser = await this.userRepository.findByEmail(userDto.email)
    if (existingUser != null) {
      throw boom.conflict('Email already exists')
    }

    const hashedPassword = await hashPassword(userDto.password)
    const userMapper: IUserDTO = {
      ...userDto,
      password: hashedPassword
    }

    const createdUser = await this.userRepository.save(userMapper)
    return createdUser
  }

  async createOwner (userDto: IUserDTO): Promise<UserModel> {
    const existingUser = await this.userRepository.findByEmail(userDto.email)
    if (existingUser != null) {
      throw boom.conflict('Email already exists')
    }

    const existingRole = await this.roleRepository.findByName('Owner')
    if (existingRole == null) {
      throw boom.conflict('Role does not exist')
    }

    const hashedPassword = await hashPassword(userDto.password)
    const userMapper: IUserDTO = {
      ...userDto,
      roleId: existingRole.id,
      password: hashedPassword
    }
    const createdUser = await this.userRepository.save(userMapper)
    return createdUser
  }

  async createEmployee (userDto: IUserDTO): Promise<UserModel> {
    const existingUser = await this.userRepository.findByEmail(userDto.email)
    if (existingUser != null) {
      throw boom.conflict('Email already exists')
    }

    const existingRole = await this.roleRepository.findByName('Employee')
    if (existingRole == null) {
      throw boom.conflict('Role does not exist')
    }

    const hashedPassword = await hashPassword(userDto.password)
    const userMapper: IUserDTO = {
      ...userDto,
      // roleId: existingRole.id,
      password: hashedPassword
    }
    const createdUser = await this.userRepository.save(userMapper)
    return createdUser
  }

  async login (email: string, _password: string): Promise<UserModel> {
    const user = await this.userRepository.findByEmail(email)
    if (user == null) {
      throw boom.notFound('User not found')
    }

    // const isPasswordValid = await user.isPasswordValid(password)
    // if (!isPasswordValid) {
    //   throw boom.unauthorized('Invalid password')
    // }

    return user
  }

  async findByEmail (email: string): Promise<UserModel> {
    const user = await this.userRepository.findByEmail(email)
    if (user == null) {
      throw boom.notFound('User not found')
    }

    return user
  }
}
