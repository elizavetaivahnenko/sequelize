'use strict';
function generateProductsCheese(){
  const cheese = [];
  for(let i =0; i<5; i++){
    cheese.push({
      name: `cheese${i}`,
      price: `3${i}`,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return cheese;
}

function generateProductsMeet(){
  const meet = [];
  for(let i = 0; i< 5; i++){
    meet.push({
      name: `chiken${i}`,
      price: `4${i}`,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return meet;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', generateProductsMeet(),{});
    await queryInterface.bulkInsert('Products', generateProductsCheese(),{})
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});

  }
};
