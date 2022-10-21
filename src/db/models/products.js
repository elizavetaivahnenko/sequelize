'use strict';
const {
  Model
} = require('sequelize');
const reciept = require('./reciept');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsTo(models.Categories,{
        foreignKey:{
          field: 'categoryId'
        }
      }),
      Products.belongsToMany(models.Orders, {through: 'Reciept' }
      )
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};