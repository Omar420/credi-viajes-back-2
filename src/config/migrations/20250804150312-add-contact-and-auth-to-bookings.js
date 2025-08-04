'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('Bookings', 'contactEmail', {
        type: Sequelize.STRING(100),
        allowNull: true,
      }, { transaction });

      await queryInterface.addColumn('Bookings', 'contactPhone', {
        type: Sequelize.STRING(20),
        allowNull: true,
      }, { transaction });

      await queryInterface.addColumn('Bookings', 'fk_contact_country_id', {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Countries',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }, { transaction });

      await queryInterface.addColumn('Bookings', 'fk_auth_id', {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Auth',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }, { transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('Bookings', 'fk_auth_id', { transaction });
      await queryInterface.removeColumn('Bookings', 'fk_contact_country_id', { transaction });
      await queryInterface.removeColumn('Bookings', 'contactPhone', { transaction });
      await queryInterface.removeColumn('Bookings', 'contactEmail', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
