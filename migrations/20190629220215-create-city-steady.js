'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CitySteadies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      moon_phase: {
        type: Sequelize.FLOAT
      },
      phase_description: {
        type: Sequelize.STRING
      },
      phase_icon: {
        type: Sequelize.STRING
      },
      sunrise: {
        type: Sequelize.STRING
      },
      sunset: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CitySteadies');
  }
};
