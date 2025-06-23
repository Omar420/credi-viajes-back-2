"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface) => {
    const genders = [
      { name: "Masculino", code: "M" },
      { name: "Femenino", code: "F" },
      { name: "Otro", code: "O" },
    ];

    for (const gender of genders) {
      const [existing] = await queryInterface.sequelize.query(
        `SELECT id FROM "Genders" WHERE code = :code`,
        { replacements: { code: gender.code } }
      );

      if (existing.length) {
        await queryInterface.bulkUpdate(
          "Genders",
          {
            name: gender.name,
            updatedAt: new Date(),
          },
          { code: gender.code }
        );
      } else {
        await queryInterface.bulkInsert("Genders", [
          {
            id: uuidv4(),
            name: gender.name,
            code: gender.code,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      }
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Genders", null, {});
  },
};
