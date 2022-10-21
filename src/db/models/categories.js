'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      Categories.belongsTo(models.Products, {
        foreignKey: {field: productId}
      })
    }
  }
  Categories.init({
    nameCategories: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};