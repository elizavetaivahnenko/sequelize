'use strict';
const addTestCategories = [
  {
    nameCategories: "cheese",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    nameCategories: "meat",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", addTestCategories, {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  }
};