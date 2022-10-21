'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reciept extends Model {
    static associate(models) {
    }
  }
  Reciept.init({
    id_order: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    count_product: DataTypes.INTEGER,
    sum_product: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reciept',
  });
  return Reciept;
};