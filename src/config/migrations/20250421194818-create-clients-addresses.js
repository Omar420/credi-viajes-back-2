"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ClientsAddresses", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
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

    await queryInterface.addColumn("ClientsAddresses", "fk_client_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: "Clients", key: "id" },
    });

    await queryInterface.addColumn("ClientsAddresses", "fk_address_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: "Addresses", key: "id" },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ClientsAddresses");
  },
};
