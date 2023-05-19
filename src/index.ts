import app from './app'
import path from 'path'
import dotenv from 'dotenv'
// const { swaggerDocs: V1SwaggerDocs } = require('./src/utils/docs/swagger')

import sequelize from './infrastructure/libs/sequelize'

const envPath = path.resolve(__dirname, '..', '.env')
dotenv.config({ path: envPath })

app.get('/home', (_req, res) => {
  res.send('Hola mi server user en Express con ts')
})

/**
 * SERVER
 */
const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
  await sequelize.authenticate()
    .then(async () => {
      await sequelize.sync({ force: false })

      console.info('\n====================== 🚀 Server running  =======================')
      console.info(`INFO:     http://localhost:${PORT} (Press CTRL+C to quit)`)
      console.info('INFO:     Waiting for application startup ...')
      console.info('INFO:     Sequelize Connected.')
      // V1SwaggerDocs(app, PORT)
      console.info('INFO:     Application startup complete.')
    }).catch(error => {
      console.error('INFO:     Cannot connect to database.', error)
    })
}).on('error', (error: any) => {
  console.error('ERROR:    Cannot start server.', error)
  process.exit(1)
})

export default app
