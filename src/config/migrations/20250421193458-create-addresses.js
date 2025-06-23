"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Addresses", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      zipCode: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addColumn("Addresses", "fk_country_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: "Countries", key: "id" },
    });

    await queryInterface.addColumn("Addresses", "fk_state_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: "States", key: "id" },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Addresses");
  },
};
