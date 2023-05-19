import { Sequelize } from 'sequelize'
import config from '../../config'

import { setupModels } from '../database'

const USER: string = encodeURIComponent(config.database.username)
const PASSWORD: string = encodeURIComponent(config.database.password)
const DATABASE: string = encodeURIComponent(config.database.dialect)
export const URI = `${DATABASE}://${USER}:${PASSWORD}@${config.database.host}:${config.database.port}/${config.database.name}`

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  host: 'localhost',
  logging: (msg: string) => console.log(`Sequelize: ${msg}`)
})

setupModels(sequelize)

export default sequelize
