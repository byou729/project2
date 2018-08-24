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
   return queryInterface.bulkInsert('Vegetables', [{
    id: 5,
    food_name: "Green Vegetables(lettuce/kale)",
    perfectPair: "Medium Red",
    foreignKey: "id"
  }], {});

  return queryInterface.bulkInsert('Vegetables', [{
    id: 7,
    food_name: "Root Vegetables(pumpkin/carrot)",
    perfectPair: "Medium Red",
    foreignKey: "id"
  }], {});

  return queryInterface.bulkInsert('Vegetables', [{
    id: 3,
    food_name: "Nightshades(tomato/eggplant)",
    perfectPair: "Medium Red",
    foreignKey: "id"
  }], {});

  return queryInterface.bulkInsert('Vegetables', [{
    id: 8,
    food_name: "Nuts & Seeds",
    perfectPair: "Medium Red",
    foreignKey: "id"
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
