'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'UserCities',
      'CityId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Cities",
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
     "CityId"
   );
  }
};
