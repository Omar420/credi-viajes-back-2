"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Passengers", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      secondName: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      firstSurname: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      secondSurname: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expirationDate: {
        allowNull: true,
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

    await queryInterface.addColumn("Passengers", "fk_gender_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: "Genders", key: "id" },
    });

    await queryInterface.addColumn("Passengers", "fk_doc_type_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: "DocumentTypes", key: "id" },
    });

    await queryInterface.addColumn("Passengers", "fk_client_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: "Clients", key: "id" },
    });

    await queryInterface.addColumn("Passengers", "fk_address_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: "Addresses", key: "id" },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Passengers");
  },
};
