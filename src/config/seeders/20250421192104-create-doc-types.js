"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface) => {
    const types = [
      { name: "Pasaporte", code: "P" },
      { name: "Documento de Identidad", code: "D" },
      { name: "Otro", code: "O" },
    ];

    for (const type of types) {
      const [existing] = await queryInterface.sequelize.query(
        `SELECT id FROM "DocumentTypes" WHERE code = :code`,
        { replacements: { code: type.code } }
      );

      if (existing.length) {
        await queryInterface.bulkUpdate(
          "DocumentTypes",
          {
            name: type.name,
            updatedAt: new Date(),
          },
          { code: type.code }
        );
      } else {
        await queryInterface.bulkInsert("DocumentTypes", [
          {
            id: uuidv4(),
            name: type.name,
            code: type.code,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      }
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("DocumentTypes", null, {});
  },
};
