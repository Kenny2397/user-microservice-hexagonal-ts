import boom from '@hapi/boom'
import { UserRepository } from '../../domain/repositories/user-repository'
import { RoleRepository } from '../../domain/repositories/role-repository'
import { User } from '../../domain/models/user'
import { CreateUserDto } from '../dtos/user-dto'
import HashService from '../../infrastructure/encryption/hash-service'

class UserService {
  private userRepository: UserRepository
  private roleRepository: RoleRepository

  constructor (userRepository: UserRepository, roleRepository: RoleRepository) {
    this.userRepository = userRepository
    this.roleRepository = roleRepository
  }

  async createUser (userDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(userDto.email)
    if (existingUser) {
      throw boom.conflict('Email already exists')
    }

    const hashedPassword = await HashService.hashPassword(userDto.password)
    const user: CreateUserDto = {
      ...userDto,
      password: hashedPassword
    }

    const createdUser = await this.userRepository.create(user)
    return createdUser
  }

  async createOwner (userDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(userDto.email)
    if (existingUser) {
      throw boom.conflict('Email already exists')
    }

    const existingRole = await this.roleRepository.findByName('Owner')
    if (!existingRole) {
      throw boom.conflict('Role does not exist')
    }

    const hashedPassword = await HashService.hashPassword(userDto.password)
    const user: CreateUserDto = {
      ...userDto,
      password: hashedPassword
    }
    console.log(user)
    const createdUser = await this.userRepository.create(user)
    return createdUser
  }
}

export default UserService
