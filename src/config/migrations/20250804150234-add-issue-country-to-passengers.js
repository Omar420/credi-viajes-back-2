'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Passengers', 'fk_issue_country_id', {
      type: Sequelize.UUID,
      allowNull: true, // Recommended to add as nullable first, then populate/update
      references: {
        model: 'Countries',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Passengers', 'fk_issue_country_id');
  }
};
