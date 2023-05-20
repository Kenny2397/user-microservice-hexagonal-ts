import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import config from './../../../config'
import UserService from './../../../application/services/user-service'
import { CreateUser } from './../interfaces/dtos/create-user'
// import { roles } from '../../../shared/constants/roles'

class UserController {
  private readonly userService: UserService

  constructor (userService: UserService) {
    this.userService = userService
  }

  async createUser (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, lastName, identifier, phone, email, password, roleId } = req.body
      const userDto: CreateUser = {
        name,
        lastName,
        identifier,
        phone,
        email,
        password,
        roleId
      }
      const user = await this.userService.createUser(userDto)
      res.json(user)
    } catch (error) {
      next(error)
    }
  }

  async createOwner (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, lastName, identifier, phone, email, password } = req.body
      const userDto: CreateUser = {
        name,
        lastName,
        identifier,
        phone,
        email,
        password,
        roleId: 2
      }
      const user = await this.userService.createOwner(userDto)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }

  async createEmployee (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, lastName, identifier, phone, email, password } = req.body
      const userDto: CreateUser = {
        name,
        lastName,
        identifier,
        phone,
        email,
        password,
        roleId: 3
      }
      const user = await this.userService.createEmployee(userDto)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }

  async login (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user: any = req.user
      const payload = {
        sub: user?.id,
        roleId: user?.roleId
      }
      const token = jwt.sign(payload, config.jwtSecret)
      res.status(200).json({
        user,
        token
      })
    } catch (error) {
      next(error)
    }
  }
}

export default UserController
