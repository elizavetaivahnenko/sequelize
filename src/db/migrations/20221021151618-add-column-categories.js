'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Categories', 'productId', { type: Sequelize.INTEGER });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('productId');
   
  }
};
