import app from './app'
import path from 'path'
import dotenv from 'dotenv'
// const { swaggerDocs: V1SwaggerDocs } = require('./src/utils/docs/swagger')
import swaggerDocs from './infrastructure/web/utils/docs/swagger'
import config from './config'

import sequelize from './infrastructure/libs/sequelize'

const envPath = path.resolve(__dirname, '..', '.env')
dotenv.config({ path: envPath })

app.get('/home', (_req, res) => {
  res.send('Hola mi server user en Express con ts')
})
/**
 * SERVER
 */
const PORT = config.port ?? 3000

app.listen(PORT, () => {
  sequelize.authenticate()
    .then(async () => {
      await sequelize.sync({ force: false })
      console.info('\n====================== 🚀 Server running  =======================')
      console.info(`INFO:     http://localhost:${PORT} (Press CTRL+C to quit)`)
      console.info('INFO:     Waiting for application startup ...')
      console.info('INFO:     Sequelize Connected.')
      swaggerDocs(app, PORT)
      console.info('INFO:     Application startup complete.')
    }).catch(error => {
      console.error('INFO:     Cannot connect to database.', error)
    })
}).on('error', (error: any) => {
  console.error('ERROR:    Cannot start server.', error)
  process.exit(1)
})

export default app
