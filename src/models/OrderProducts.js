const Sequelize = require('sequelize')
const { sequelize } = require('../db')
const { Products } = require('./Products')

const OrderProducts = sequelize.define('orderProducts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    orderProduct: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
        get() {
            const id = this.getDataValue('id')

            let orderModel = 'P0000'
            let idLength = id.toString().length
            const newOrderProduct = orderModel.substring(0, orderModel.length - idLength ) + id

            return newOrderProduct
        }
    },
    productsCount: {
        type: Sequelize.INTEGER,
        // allowNull: false
    },
    productsCost: {
        type: Sequelize.DOUBLE,
        // allowNull: false
    },
    shippingCost: {
        type: Sequelize.DOUBLE,
        // allowNull: false
    },
    taxes: {
        type: Sequelize.DOUBLE,
        // allowNull: false
    },
    total: {
        type: Sequelize.DOUBLE,
        // allowNull: false
    },
    productId: {
        type: Sequelize.INTEGER,
        // allowNull: false
    },
    deleveryDate: {
        type: Sequelize.DATE,
        // allowNull: false
    }
}, {
    timestamps: false
})

// OrderProducts.hasMany(Products, { foreignKey: 'productId', sourceKey: 'id' })
// Products.belongsTo(OrderProducts, { foreignKey: 'productId', sourceKey: 'id' })

module.exports = {
    OrderProducts
}
