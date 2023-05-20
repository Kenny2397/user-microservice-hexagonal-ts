import boom from '@hapi/boom'
import config from '../../config'
import { Request, Response, NextFunction } from 'express'
// const models = require('./../libs/sequelize')

export function checkApiKey (req: Request, _res: Response, next: NextFunction): any {
  const apiKey = req.headers.api
  if (apiKey === config.jwtSecret) {
    next()
  } else {
    next(boom.unauthorized())
  }
}

export function checkRoles (...roles: number[]) {
  return (req: any, _res: Response, next: NextFunction) => {
    try {
      const useri = req.user
      if (roles.includes(useri.roleId)) {
        next()
      } else {
        throw boom.forbidden('The user does not have access to this route')
      }
    } catch (error) {
      next(error)
    }
  }
}
