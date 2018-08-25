'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Dairy', [{
    id: 2,
    food_name: "Soft Cheese",
    perfectPair: "LIGHT RED",
    wine_id: 2,
    foreignKey: "wine_id"
  }], {});

  return queryInterface.bulkInsert('Dairies', [{
    id: 1,
    food_name: "Hard Cheese",
    perfectPair: "LIGHT RED",
    wine_id: 2,
    foreignKey: "wine_id"
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
