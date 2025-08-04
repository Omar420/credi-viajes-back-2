'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      // 1. Add fk_issue_country_id to Passengers
      await queryInterface.addColumn('Passengers', 'fk_issue_country_id', {
        type: Sequelize.UUID,
        allowNull: true, // Set to true temporarily
        references: {
          model: 'Countries',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }, { transaction });

      // Update existing rows to a default value if necessary, then set to NOT NULL
      // For this case, we'll assume new passengers will have this, and old ones might not.
      // Setting allowNull to false would require a default value for existing rows.
      // Let's keep it nullable to avoid data inconsistencies on existing records.
      // await queryInterface.changeColumn('Passengers', 'fk_issue_country_id', {
      //   type: Sequelize.UUID,
      //   allowNull: false,
      // }, { transaction });

      // 2. Create AirItineraryInformation table
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
          onDelete: 'CASCADE',
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
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }, { transaction });

      // 3. Modify installments table
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

      // 4. Modify Bookings table
      await queryInterface.addColumn('Bookings', 'contactEmail', {
        type: Sequelize.STRING(100),
        allowNull: true, // Temp nullable
      }, { transaction });
      await queryInterface.addColumn('Bookings', 'contactPhone', {
        type: Sequelize.STRING(20),
        allowNull: true, // Temp nullable
      }, { transaction });
      await queryInterface.addColumn('Bookings', 'fk_contact_country_id', {
        type: Sequelize.UUID,
        allowNull: true, // Temp nullable
        references: {
          model: 'Countries',
          key: 'id',
        },
      }, { transaction });
      await queryInterface.addColumn('Bookings', 'fk_auth_id', {
        type: Sequelize.UUID,
        allowNull: true, // Temp nullable
        references: {
          model: 'Auth',
          key: 'id',
        },
      }, { transaction });

      await queryInterface.removeColumn('Bookings', 'fk_client_id', { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      // 1. Revert Bookings table changes
      await queryInterface.addColumn('Bookings', 'fk_client_id', {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Clients',
          key: 'id',
        },
      }, { transaction });
      await queryInterface.removeColumn('Bookings', 'fk_auth_id', { transaction });
      await queryInterface.removeColumn('Bookings', 'fk_contact_country_id', { transaction });
      await queryInterface.removeColumn('Bookings', 'contactPhone', { transaction });
      await queryInterface.removeColumn('Bookings', 'contactEmail', { transaction });

      // 2. Revert installments table changes
      await queryInterface.changeColumn('installments', 'credit_purchase_id', {
        type: Sequelize.UUID,
        allowNull: false,
      }, { transaction });
      await queryInterface.removeColumn('installments', 'fk_booking_id', { transaction });

      // 3. Drop AirItineraryInformation table
      await queryInterface.dropTable('AirItineraryInformation', { transaction });

      // 4. Remove fk_issue_country_id from Passengers
      await queryInterface.removeColumn('Passengers', 'fk_issue_country_id', { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};
