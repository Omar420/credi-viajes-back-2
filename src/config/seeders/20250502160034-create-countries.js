'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const countries = [
      { id: uuidv4(), name: 'Venezuela', code: 'VE' },
      { id: uuidv4(), name: 'United States', code: 'US' },
    ];

    await queryInterface.bulkInsert('Countries', countries, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Countries', null, {});
  }
};
