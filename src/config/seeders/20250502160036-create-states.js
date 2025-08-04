'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const venezuela = await queryInterface.rawSelect('Countries', {
      where: {
        code: 'VE',
      },
    }, ['id']);

    const unitedStates = await queryInterface.rawSelect('Countries', {
        where: {
            code: 'US',
        },
    }, ['id']);

    if (!venezuela || !unitedStates) {
        console.log("Countries not found, skipping states seeder.");
        return;
    }

    const states = [
      // Venezuela
      { id: uuidv4(), name: 'Distrito Capital', fk_country_id: venezuela },
      { id: uuidv4(), name: 'Miranda', fk_country_id: venezuela },
      // United States
      { id: uuidv4(), name: 'California', fk_country_id: unitedStates },
      { id: uuidv4(), name: 'Texas', fk_country_id: unitedStates },
    ];

    await queryInterface.bulkInsert('States', states, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('States', null, {});
  }
};
