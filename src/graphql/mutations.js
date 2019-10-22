'use strict'
const { Products } = require('../models/Products')
const { OrderProducts } = require('../models/OrderProducts')

module.exports = {
  createProduct: async (root, { input }) => {
    try {
      const product = await Products.create(input)
      return product.get({ plain: true })
    } catch (error) {
      console.error(error)
    }
  },
  createOrderProduct: async (root, { input }) => {
    try {
      console.log('not coming?',input);
      
      const orderProduct = await OrderProducts.create(input)
      return orderProduct.get({ plain: true })
    } catch (error) {
      console.error(error)
    }
  }
}
