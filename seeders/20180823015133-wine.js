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
        wmajorcat: "RED"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 1,
        wtype: "Syrah/Shiraz",
        wmajorcat: "RED"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 1,
        wtype: "Cabarnet Sauvignon",
        wmajorcat: "RED"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 1,
        wtype: "Bordeaux Blend",
        wmajorcat: "RED"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 2,
        wtype: "Merlot",
        wmajorcat: "RED"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 2,
        wtype: "Zinfandel",
        wmajorcat: "RED"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 3,
        wtype: "Pinot Norir",
        wmajorcat: "RED"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 3,
        wtype: "Gamay",
        wmajorcat: "RED"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 4,
        wtype: "All Roses",
        wmajorcat: "ROSE"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 5,
        wtype: "Chardonay",
        wmajorcat: "LIGHT WHITE"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 6,
        wtype: "Sauvignon Blanc",
        wmajorcat: "LIGHT WHITE"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 6,
        wtype: "Pinot Blanc",
        wmajorcat: "LIGHT WHITE"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 6,
        wtype: "Pinot Gris",
        wmajorcat: "LIGHT WHITE"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 7,
        wtype: "Champagne",
        wmajorcat: "SPARKLING"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 7,
        wtype: "Prosecco",
        wmajorcat: "SPARKLING"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 7,
        wtype: "Sparkling Rose",
        wmajorcat: "SPARKLING"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 8,
        wtype: "Moscato",
        wmajorcat: "SWEET WHITE/DESSERT"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 8,
        wtype: "Riesling",
        wmajorcat: "SWEET WHITE/DESSERT"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 9,
        wtype: "Port",
        wmajorcat: "SWEET WHITE/DESSERT"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 9,
        wtype: "Sherry",
        wmajorcat: "SWEET WHITE/DESSERT"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 9,
        wtype: "Maderia",
        wmajorcat: "SWEET WHITE/DESSERT"
      }], {});

      return queryInterface.bulkInsert('Wines', [{
        id: 9,
        wtype: "Muscat",
        wmajorcat: "SWEET WHITE/DESSERT"
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
