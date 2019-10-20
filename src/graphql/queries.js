'use strict'

const { Products } = require('../models/Products')

module.exports = {
    getProducts: async () => {
        try {
            const products = Products.findAll()
            return products;
        } catch (error) {
            console.error(error)
        }
    },
    getProduct: async (root, { id }) => {
        try {
            const product = await Products.findByPk(id)
            return product
        } catch (error) {
            console.error(error);
        }
    }
}