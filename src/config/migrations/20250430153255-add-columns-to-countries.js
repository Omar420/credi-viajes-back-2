"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Countries", "countryPrefix", {
      type: Sequelize.STRING(6),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Countries", "countryPrefix");
  },
};
