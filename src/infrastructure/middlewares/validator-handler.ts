import boom from '@hapi/boom'
import { Response, NextFunction } from 'express'

function validatorHandler (schema: any, property: string) {
  return (req: any, _res: Response, next: NextFunction) => {
    const data = req[property]
    console.log(data)
    const { error } = schema.validate(data,
      {
        abortEarly: false
      })
    if (error instanceof Error) {
      next(boom.badRequest(error))
    }
    next()
  }
}

export default validatorHandler
