"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Bookings", {
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
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      departureDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      returnDate: {
        type: Sequelize.DATE,
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

    await queryInterface.addColumn("Bookings", "fk_origin_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Destinations",
        key: "id",
      },
    });

    await queryInterface.addColumn("Bookings", "fk_destination_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Destinations",
        key: "id",
      },
    });

    await queryInterface.addColumn("Bookings", "fk_status_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "BookingStatus",
        key: "id",
      },
    });

    await queryInterface.addColumn("Bookings", "fk_client_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Clients",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Bookings");
  },
};
