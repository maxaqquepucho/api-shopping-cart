'use strict'

const { Products } = require('../models/Products')
const { OrderProducts } = require('../models/OrderProducts')
const Sequelize = require('sequelize')

module.exports = {
  getProducts: async () => {
    try {
      const products = Products.findAll()
      return products
    } catch (error) {
      console.error(error)
    }
  },
  getProduct: async (root, { id }) => {
    try {
      const product = await Products.findByPk(id)
      return product
    } catch (error) {
      console.error(error)
    }
  },
  findProducts: async (root, { name }) => {
    try {
      const product = await Products.findAll({
        where: {
          name: {
            [Sequelize.Op.substring]: name
          }
        }
      })

      return product
    } catch (error) {
      console.error(error)
    }
  },
  getOrderProducts: async () => {
    try {
      const orderProducts = await OrderProducts.findAll()

      return orderProducts
    } catch (error) {
      console.error(error)
    }
  }
}
