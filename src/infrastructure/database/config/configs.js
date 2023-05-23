const URI = require('../../libs/sequelize')

module.exports = {
  development: {
    url: URI,
    dialect: 'mysql'
  },
  production: {
    url: URI,
    dialect: 'mysql'
  }
}
