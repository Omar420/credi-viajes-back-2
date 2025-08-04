'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Note: In a real-world scenario with existing data,
    // you would first migrate data from fk_client_id to fk_auth_id
    // before removing this column. For this task, we remove it directly.
    await queryInterface.removeColumn('Bookings', 'fk_client_id');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Bookings', 'fk_client_id', {
      type: Sequelize.UUID,
      allowNull: true, // Set to true to avoid errors on existing rows
      references: {
        model: 'Clients',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  }
};
