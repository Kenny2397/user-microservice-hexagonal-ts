import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.send('Hola mi server user en Express con ts desde auth')
})

export default router
