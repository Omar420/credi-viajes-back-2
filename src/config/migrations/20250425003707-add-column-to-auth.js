"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Auth", "sessionLimit", {
      type: Sequelize.INTEGER,
      defaultValue: 5,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Auth", "sessionLimit");
  },
};
