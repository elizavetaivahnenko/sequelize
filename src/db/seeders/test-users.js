'use strict';

function generateTestUsers(){
  const users = [];
  for(let i=0; i<100; i++){
    users.push({
      name: `Test${i}`,
      email:`Surname${i}@gmail.com`,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return users;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', generateTestUsers(),{});
  
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
