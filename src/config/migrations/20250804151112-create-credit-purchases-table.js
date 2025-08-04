'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('CreditPurchases', {
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
      },
      installment_plan_id: {
        type: Sequelize.UUID,
        references: {
          model: 'InstallmentPlans',
          key: 'id',
        },
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('CreditPurchases');
  }
};
