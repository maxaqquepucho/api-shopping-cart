const Sequelize = require('sequelize')
const { sequelize } = require('../db')

const Products = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DOUBLE
  }
}, {
  timestamps: false
})

module.exports = {
  Products
}
