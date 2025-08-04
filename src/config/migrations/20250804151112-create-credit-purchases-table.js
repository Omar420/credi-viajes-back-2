'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('credit_purchases', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      reservation_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Bookings',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      installment_plan_id: {
        type: Sequelize.UUID,
        // Note: This references a table that might be created in a future migration.
        // It's better to add this as a separate 'add-associations' migration
        // after all tables are created. For now, we'll add it but be aware.
        references: {
          model: 'installment_plans',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      total_with_interest: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      total_paid: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0,
      },
      is_fully_paid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('credit_purchases');
  }
};
