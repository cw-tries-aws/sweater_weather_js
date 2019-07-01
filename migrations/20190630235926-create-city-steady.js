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
      sunrise: {
        type: Sequelize.STRING
      },
      sunset: {
        type: Sequelize.STRING
      },
      moonPhase: {
        type: Sequelize.FLOAT
      },
      phaseDescription: {
        type: Sequelize.STRING
      },
      phaseIcon: {
        type: Sequelize.STRING
      },
      CityId: {
        type: Sequelize.INTEGER,
        references: { model: "Cities", key: "id"}
      },
      DayId: {
        type: Sequelize.INTEGER,
        references: { model: "Days", key: "id"}
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
