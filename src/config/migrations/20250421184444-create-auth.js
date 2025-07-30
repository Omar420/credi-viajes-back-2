"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Auth", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      username: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      password: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      lastSession: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      type: {
        type: Sequelize.ENUM("user", "client"),
        allowNull: false,
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

    await queryInterface.addColumn("Auth", "fk_user_id", {
      type: Sequelize.UUID,
      allowNull: true,
      references: { model: "Users", key: "id" },
    });

    await queryInterface.addColumn("Auth", "fk_client_id", {
      type: Sequelize.UUID,
      allowNull: true,
      references: { model: "Clients", key: "id" },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Auth");
  },
};
