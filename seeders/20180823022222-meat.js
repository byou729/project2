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
   return queryInterface.bulkInsert('Meat', [{
    foodName: "red meat",
    foodCategory: "meat",
    perfectPair: "bold red",
    wine_id: 1
  }], {});
  
  return queryInterface.bulkInsert('cured meat', [{
    foodName: "cured meat",
    foodCategory: "meat",
    perfectPair:"bold red",
    wine_id:1
  }], {});
  return queryInterface.bulkInsert('poultry)', [{
    foodName: "poultry(chicken/duck/turkey",
    foodCategory: "meat",
    perfectPair:"bold red",
    wine_id: 1
  }], {});
  return queryInterface.bulkInsert('pork', [{
    foodName: "pork(roast/tenderloin/chop)",
    foodCategory: "meat",
    perfectPair:"bold red",
    wine_id: 1
  }], {});
  return queryInterface.bulkInsert('mollusk', [{
    foodName: "mollusk(oyster/mussel/clam)",
    foodCategory: "meat",
    perfectPair:"bold red",
    wine_id: 2
  }], {});
  return queryInterface.bulkInsert('fish', [{
    foodName: "fish(tuna/cod/trout/bass",
    foodCategory: "meat",
    perfectPair:"bold red",
    wine_id:2
  }], {});
  return queryInterface.bulkInsert('lobster', [{
    foodName: "lobster & shellfish(prawn/crab)",
    foodCategory: "meat",
    perfectPair:"bold red",
    wine_id:2
  }], {});


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
}
}
