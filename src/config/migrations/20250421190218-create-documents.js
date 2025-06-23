"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Documents", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      number: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      expirationDate: {
        allowNull: false,
        type: Sequelize.DATE,
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

    await queryInterface.addColumn("Documents", "fk_doc_type_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: "DocumentTypes", key: "id" },
    });

    await queryInterface.addColumn("Documents", "fk_client_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: "Clients", key: "id" },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Documents");
  },
};
