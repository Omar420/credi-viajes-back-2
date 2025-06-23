"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("OTPSmsVerifications", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      authId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "Auth", key: "id" },
        onDelete: "CASCADE",
      },
      code: {
        type: Sequelize.STRING(6),
        allowNull: false,
        unique: true,
      },
      used: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      expiresAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addColumn("OTPSmsVerifications", "fk_auth_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: { model: "Auth", key: "id" },
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("OTPSmsVerifications");
  },
};
