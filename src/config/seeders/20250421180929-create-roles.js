"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const roles = [
      { name: "Superadmin", code: "superadmin" },
      { name: "Administrador", code: "admin" },
      { name: "Operador", code: "operator" },
    ];

    for (const role of roles) {
      const [existing] = await queryInterface.sequelize.query(
        `SELECT id FROM "Roles" WHERE code = :code`,
        { replacements: { code: role.code } }
      );

      if (existing.length) {
        await queryInterface.bulkUpdate(
          "Roles",
          {
            name: role.name,
            updatedAt: new Date(),
          },
          { code: role.code }
        );
      } else {
        await queryInterface.bulkInsert("Roles", [
          {
            id: uuidv4(),
            name: role.name,
            code: role.code,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      }
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
