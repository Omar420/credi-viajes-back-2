'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Bookings', 'contactEmail', {
      type: Sequelize.STRING(100),
      allowNull: true,
    });

    await queryInterface.addColumn('Bookings', 'contactPhone', {
      type: Sequelize.STRING(20),
      allowNull: true,
    });

    await queryInterface.addColumn('Bookings', 'fk_contact_country_id', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'Countries',
        key: 'id',
      },
      onUpdate: 'CASCADE',
    });

    await queryInterface.addColumn('Bookings', 'fk_auth_id', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'Auth',
        key: 'id',
      },
      onUpdate: 'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Bookings', 'fk_auth_id');
    await queryInterface.removeColumn('Bookings', 'fk_contact_country_id');
    await queryInterface.removeColumn('Bookings', 'contactPhone');
    await queryInterface.removeColumn('Bookings', 'contactEmail');
  }
};
