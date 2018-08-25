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
   return queryInterface.bulkInsert('Sweet', [{
    id: 8,
    food_name: "Fruit & Berries(strawberry/orange/apple)",
    perfectPair: "Sweet White",
    wine_id: 2,
    foreignKey: "wine_id"
  }], {});

  return queryInterface.bulkInsert('Sweet', [{
    id: 9,
    food_name: "Vanilla & Caramel(creme brulee/ice cream)",
    perfectPair: "Sweet White",
    wine_id: 2,
    foreignKey: "wine_id"
  }], {});

  return queryInterface.bulkInsert('Sweet', [{
    id: 9,
    food_name: "Chocolate & Coffee",
    perfectPair: "Sweet White",
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
