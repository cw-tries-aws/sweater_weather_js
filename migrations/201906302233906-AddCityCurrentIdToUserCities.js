'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'UserCities',
      'CityCurrentId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: "CityCurrents",
          key: "id"
        },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
     "UserCities",
     "CityCurrentId"
   );
  }
};
