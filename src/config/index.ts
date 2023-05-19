import path from 'path'
import dotenv from 'dotenv'

const envPath = path.resolve(__dirname, '..', '..', '.env')
dotenv.config({ path: envPath })

const config = {
  port: process.env.PORT || 3000,
  database: {
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 33061,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    name: process.env.DB_NAME || 'user_microservice'
  },
  jwtSecret: process.env.JWT_SECRET || 'mysecret'
}

console.log(config)
export default config
