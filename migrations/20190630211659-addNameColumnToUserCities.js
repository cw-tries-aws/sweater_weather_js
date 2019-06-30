'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'UserCity',
      'cityName',
      {
        type: Sequelize.STRING
      }
    )

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
     "UserCity",
     "cityName"
   );
  }
};
