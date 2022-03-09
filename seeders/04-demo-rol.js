'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('roles', [
      { role: "admin",
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      {
        role: "user", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('roles', null, {});
    
  }
};
