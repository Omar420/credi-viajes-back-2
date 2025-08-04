'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('AirItineraryInformation', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      fk_booking_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Bookings',
          key: 'id',
        },
        onUpdate: 'CASCADE',
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      departure_location_code: {
        type: Sequelize.STRING(3),
        allowNull: false,
      },
      departure_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      departure_time: {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      arrival_location_code: {
        type: Sequelize.STRING(3),
        allowNull: false,
      },
      flight_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      reservation_booking_designator_code: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      number_in_party: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      carrier: {
        type: Sequelize.STRING(2),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('AirItineraryInformation');
  }
};
