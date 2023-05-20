import { ValidationError } from 'sequelize'
import { Request, Response, NextFunction } from 'express'
import { Boom } from '@hapi/boom'

export function LogErrors (err: any, _req: Request, _res: Response, next: NextFunction): void {
  console.log('----- Log errors ----')
  console.error(err.type)
  console.error(err.message)
  console.log('---------------------')
  next(err)
}

export function ErrorHandler (err: any, _req: Request, res: Response, _next: NextFunction): void {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

export function BoomErrorHandler (err: any, _req: Request, res: Response, next: NextFunction): void {
  if (err instanceof Boom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}

export function OrmErrorHandler (err: any, _req: Request, res: Response, next: NextFunction): void {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    })
  }
  next(err)
}
