import express from 'express'
import userRouter from './user-routes'
import roleRouter from './role-routes'

function RouterApi (app: express.Application): void {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/users', userRouter)
  router.use('/roles', roleRouter)
}

export default RouterApi
