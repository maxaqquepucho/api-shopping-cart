'use strict'
const { Products } = require('../models/Products')

module.exports = {
    createProduct: async (root, { input }) => {
        try {
            const product = await Products.create(input)
            return product.get({  plain: true })
            
        } catch (error) {
            console.error(error);     
            return        
        }           
    }
}