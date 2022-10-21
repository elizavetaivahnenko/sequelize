'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsToMany(models.Products, {through: 'Products'})
    }
  }
  Order.init({
    email: DataTypes.STRING,
    summOrder: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};