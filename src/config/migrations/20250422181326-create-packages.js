"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Packages", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(50),
      },
      deadLine: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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

    await queryInterface.addColumn("Packages", "fk_origin_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Destinations",
        key: "id",
      },
    });

    await queryInterface.addColumn("Packages", "fk_destination_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Destinations",
        key: "id",
      },
    });

    await queryInterface.addColumn("Packages", "fk_created_by_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    });
    await queryInterface.addColumn("Packages", "fk_updated_by_id", {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: "Users",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Packages");
  },
};
