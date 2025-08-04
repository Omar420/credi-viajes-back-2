'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Installments', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      credit_purchase_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'CreditPurchases',
          key: 'id',
        },
        onUpdate: 'CASCADE',
      },
      fk_booking_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Bookings',
          key: 'id',
        },
        onUpdate: 'CASCADE',
      },
      amount_due: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      due_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      paid_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM('pending', 'paid', 'overdue'),
        defaultValue: 'pending',
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
    await queryInterface.dropTable('Installments');
  }
};
