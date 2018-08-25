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
      return queryInterface.bulkInsert('Wines', [{
        id: 1,
        wtype: "Malbec",
        wmajorcat: "RED",
        dairy_id: null,
        meat_id:1,
        vegetable_id:1,
        fruits_id: null

      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 1,
        wtype: "Syrah/Shiraz",
        wmajorcat: "RED",
        dairy_id:null,
        meat_id:1,
        vegetable_id:2,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 1,
        wtype: "Cabarnet Sauvignon",
        wmajorcat: "RED"
        dairy_id:null,
        meat_id:2,
        vegetable_id:1,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 1,
        wtype: "Bordeaux Blend",
        wmajorcat: "RED",
        dairy_id:null,
        meat_id:2,
        vegetable_id:null,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 2,
        wtype: "Merlot",
        wmajorcat: "RED",
        dairy_id:2,
        meat_id:3,
        vegetable_id:null,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 2,
        wtype: "Zinfandel",
        wmajorcat: "RED",
        dairy_id:2,
        meat_id:3,
        vegetable_id:null,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 3,
        wtype: "Pinot Noir",
        wmajorcat: "RED",
        dairy_id:2,
        meat_id:2,
        vegetable_id:null,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 3,
        wtype: "Gamay",
        wmajorcat: "RED",
        dairy_id:2,
        meat_id:2,
        vegetable_id:null,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 4,
        wtype: "All Roses",
        wmajorcat: "ROSE",
        dairy_id:null,
        meat_id:4,
        vegetable_id:7,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 5,
        wtype: "Chardonay",
        wmajorcat: "LIGHT WHITE",
        dairy_id:null,
        meat_id:6,
        vegetable_id:null,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 6,
        wtype: "Sauvignon Blanc",
        wmajorcat: "LIGHT WHITE",
        dairy_id:null,
        meat_id:5,
        vegetable_id:5,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 6,
        wtype: "Pinot Blanc",
        wmajorcat: "LIGHT WHITE",
        dairy_id:null,
        meat_id:5,
        vegetable_id:5,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 6,
        wtype: "Pinot Gris",
        wmajorcat: "LIGHT WHITE",
        dairy_id:null,
        meat_id:5,  
        vegetable_id:5,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 7,
        wtype: "Champagne",
        wmajorcat: "SPARKLING",
        dairy_id:null,
        meat_id:4,
        vegetable_id:null,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 7,
        wtype: "Prosecco",
        wmajorcat: "SPARKLING",
        dairy_id:null,
        meat_id:4,
        vegetable_id:null,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 7,
        wtype: "Sparkling Rose",
        wmajorcat: "SPARKLING",
        dairy_id:1,
        meat_id:2,
        vegetable_id:1,
        fruits_id:2
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 8,
        wtype: "Moscato",
        wmajorcat: "SWEET WHITE/DESSERT",
        dairy_id:null,
        meat_id:4,
        vegetable_id:null,
        fruits_id:null
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 8,
        wtype: "Riesling",
        wmajorcat: "SWEET WHITE/DESSERT",
        dairy_id:null,
        meat_id:null,
        vegetable_id:null,
        fruits_id:8
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 9,
        wtype: "Port",
        wmajorcat: "SWEET WHITE/DESSERT",
        dairy_id:null,
        meat_id:null,
        vegetable_id:null,
        fruits_id:9
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 9,
        wtype: "Sherry",
        wmajorcat: "SWEET WHITE/DESSERT",
        dairy_id:null,
        meat_id:null, 
        vegetable_id:null,
        fruits_id: 9
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 9,
        wtype: "Maderia",
        wmajorcat: "SWEET WHITE/DESSERT",
        dairy_id:0,
        meat_id:0,
        vegetable_id:0,
        fruits_id: 9
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 9,
        wtype: "Muscat",
        wmajorcat: "SWEET WHITE/DESSERT",
        dairy_id:0,
        meat_id:0,
        vegetable_id:0,
        fruits_id:9
      }], {});

      
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Wines', null, {});
  }
};
