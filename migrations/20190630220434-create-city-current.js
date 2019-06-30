'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CityCurrents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      temp: {
        type: Sequelize.FLOAT
      },
      apparent: {
        type: Sequelize.FLOAT
      },
      icon: {
        type: Sequelize.STRING
      },
      cloudCover: {
        type: Sequelize.FLOAT
      },
      humidity: {
        type: Sequelize.FLOAT
      },
      visibility: {
        type: Sequelize.FLOAT
      },
      uvIndex: {
        type: Sequelize.FLOAT
      },
      windSpeed: {
        type: Sequelize.FLOAT
      },
      windDirection: {
        type: Sequelize.FLOAT
      },
      summary: {
        type: Sequelize.STRING
      },
      CityId: {
        type: Sequelize.INTEGER,
        references: { model: "Cities", key: "id"}
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
    return queryInterface.dropTable('CityCurrents');
  }
};
