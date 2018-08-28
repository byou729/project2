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
      return queryInterface.bulkInsert('wine', [{
        // id: AUTO_INCREMENT,
        wtype: "Malbec",
        wmajorcat: "RED",
        // dairy_id: 2,
        // meat_id:1,
        // vegetable_id:1,
        // fruits_id: 2

      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Syrah/Shiraz",
        wmajorcat: "RED",
        // dairy_id:2,
        // meat_id:1,
        // vegetable_id:2,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Cabarnet Sauvignon",
        wmajorcat: "RED",
        // dairy_id:2,
        // meat_id:2,
        // vegetable_id:1,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Bordeaux Blend",
        wmajorcat: "RED",
        // dairy_id:2,
        // meat_id:2,
        // vegetable_id:2,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Merlot",
        wmajorcat: "RED",
        // dairy_id:2,
        // meat_id:3,
        // vegetable_id:2,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Zinfandel",
        wmajorcat: "RED",
        // dairy_id:2,
        // meat_id:3,
        // vegetable_id:2,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Pinot Noir",
        wmajorcat: "RED",
        // dairy_id:2,
        // meat_id:2,
        // vegetable_id:2,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Gamay",
        wmajorcat: "RED",
        // dairy_id:2,
        // meat_id:2,
        // vegetable_id:2,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "All Roses",
        wmajorcat: "ROSE",
        // dairy_id:2,
        // meat_id:4,
        // vegetable_id:7,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Chardonay",
        wmajorcat: "LIGHT WHITE",
        // dairy_id:2,
        // meat_id:6,
        // vegetable_id:2,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Sauvignon Blanc",
        wmajorcat: "LIGHT WHITE",
        // dairy_id:2,
        // meat_id:5,
        // vegetable_id:5,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Pinot Blanc",
        wmajorcat: "LIGHT WHITE",
        // dairy_id:2,
        // meat_id:5,
        // vegetable_id:5,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Pinot Gris",
        wmajorcat: "LIGHT WHITE",
        // dairy_id:2,
        // meat_id:5,  
        // vegetable_id:5,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Champagne",
        wmajorcat: "SPARKLING",
        // dairy_id:2,
        // meat_id:4,
        // vegetable_id:2,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Prosecco",
        wmajorcat: "SPARKLING",
        // dairy_id:2,
        // meat_id:4,
        // vegetable_id:2,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Sparkling Rose",
        wmajorcat: "SPARKLING",
        // dairy_id:1,
        // meat_id:2,
        // vegetable_id:1,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Moscato",
        wmajorcat: "SWEET WHITE/DESSERT",
        // dairy_id:2,
        // meat_id:4,
        // vegetable_id:2,
        // fruits_id:2
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Riesling",
        wmajorcat: "SWEET WHITE/DESSERT",
        // dairy_id:2,
        // meat_id:2,
        // vegetable_id:2,
        // fruits_id:8
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Port",
        wmajorcat: "SWEET WHITE/DESSERT",
        // dairy_id:2,
        // meat_id:2,
        // vegetable_id:2,
        // fruits_id:9
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Sherry",
        wmajorcat: "SWEET WHITE/DESSERT",
        // dairy_id:2,
        // meat_id:2, 
        // vegetable_id:2,
        // fruits_id: 9
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Maderia",
        wmajorcat: "SWEET WHITE/DESSERT",
        // dairy_id:0,
        // meat_id:0,
        // vegetable_id:0,
        // fruits_id: 9
      }], {});

      return queryInterface.bulkInsert('wine'  , [{
        // id: AUTO_INCREMENT,
        wtype: "Muscat",
        wmajorcat: "SWEET WHITE/DESSERT",
        // dairy_id:0,
        // meat_id:0,
        // vegetable_id:0,
        // fruits_id:9
      }], {});

      
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', 2, {});
    */
   return queryInterface.bulkDelete('wine', {});
  }
};
