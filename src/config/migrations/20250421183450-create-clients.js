"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Clients", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
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
      birthdayDate: {
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

    await queryInterface.addColumn("Clients", "fk_gender_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: "Genders", key: "id" },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Clients");
  },
};
