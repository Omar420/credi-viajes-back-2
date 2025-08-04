'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('InstallmentPlans', 'initial_fee_percentage', {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 100.00,
      }, { transaction });

      await queryInterface.addColumn('InstallmentPlans', 'installment_percentage', {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 0.00,
      }, { transaction });

      await queryInterface.addColumn('InstallmentPlans', 'days_between_installments', {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 30,
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
      await queryInterface.removeColumn('InstallmentPlans', 'days_between_installments', { transaction });
      await queryInterface.removeColumn('InstallmentPlans', 'installment_percentage', { transaction });
      await queryInterface.removeColumn('InstallmentPlans', 'initial_fee_percentage', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
