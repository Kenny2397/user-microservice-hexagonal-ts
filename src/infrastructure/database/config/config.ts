// import fs from 'fs'
import { URI } from '../../libs/sequelize'

module.exports = {
  development: {
    // username: 'database_dev',
    // password: 'database_dev',
    // database: 'database_dev',
    host: 'localhost',
    port: 33061,
    dialect: 'mysql',
    url: URI
    // dialectOptions: {
    //   bigNumberStrings: true
    // }
  },
  test: {
    // username: process.env.CI_DB_USERNAME,
    // password: process.env.CI_DB_PASSWORD,
    // database: process.env.CI_DB_NAME,
    // host: '127.0.0.1',
    // port: 3306,
    // dialect: 'mysql',
    // dialectOptions: {
    //   bigNumberStrings: true
    // }
  },
  production: {
    // username: process.env.PROD_DB_USERNAME,
    // password: process.env.PROD_DB_PASSWORD,
    // database: process.env.PROD_DB_NAME,
    // host: process.env.PROD_DB_HOSTNAME,
    // port: process.env.PROD_DB_PORT,
    dialect: 'mysql',
    url: URI
    // dialectOptions: {
    //   bigNumberStrings: true,
    //   ssl: {
    //     ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
    //   }
    // }
  }
}
