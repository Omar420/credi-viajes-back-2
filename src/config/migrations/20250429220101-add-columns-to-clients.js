"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Clients", "countryPrefix", {
      type: Sequelize.STRING(4),
      defaultValue: +58,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Clients", "countryPrefix");
  },
};
