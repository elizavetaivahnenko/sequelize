'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      Categories.hasMany(models.Products, {
        foreignKey: {field: 'categoryId'}
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