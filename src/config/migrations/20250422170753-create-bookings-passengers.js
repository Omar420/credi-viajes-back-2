"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("BookingsPassengers", {
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

    await queryInterface.addColumn("BookingsPassengers", "fk_booking_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Bookings",
        key: "id",
      },
    });

    await queryInterface.addColumn("BookingsPassengers", "fk_passenger_id", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Passengers",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("BookingsPassengers");
  },
};
