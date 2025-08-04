'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('installments', 'fk_booking_id', {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Bookings',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }, { transaction });

      await queryInterface.changeColumn('installments', 'credit_purchase_id', {
        type: Sequelize.UUID,
        allowNull: true,
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
      // To revert, we need to ensure no rows use the fk_booking_id or have null credit_purchase_id
      // For simplicity, we'll just revert the schema changes.
      await queryInterface.removeColumn('installments', 'fk_booking_id', { transaction });

      await queryInterface.changeColumn('installments', 'credit_purchase_id', {
        type: Sequelize.UUID,
        allowNull: false, // Revert back to non-nullable
      }, { transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
