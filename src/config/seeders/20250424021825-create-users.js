"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface) => {
    const [roles] = await queryInterface.sequelize.query(
      `SELECT id, code FROM "Roles"`
    );

    const roleMap = {};
    for (const role of roles) roleMap[role.code] = role.id;

    const userSeeds = [
      {
        name: "Super",
        surname: "Superadmin",
        phoneNumber: "0000000000",
        roleCode: "superadmin",
        email: "super@vilo.team",
        username: "superadmin",
      },
      {
        name: "Admin",
        surname: "administrador",
        phoneNumber: "1111111111",
        roleCode: "admin",
        email: "admin@vilo.team",
        username: "admin",
      },
      {
        name: "Operador",
        surname: "operador",
        phoneNumber: "2222222222",
        roleCode: "operator",
        email: "operador@vilo.team",
        username: "operador",
      },
    ];

    for (const seed of userSeeds) {
      // Verificar si el usuario existe
      const [existingUsers] = await queryInterface.sequelize.query(
        `SELECT id FROM "Users" WHERE "phoneNumber" = :phoneNumber`,
        { replacements: { phoneNumber: seed.phoneNumber } }
      );

      let userId;
      if (existingUsers.length) {
        userId = existingUsers[0].id;
        await queryInterface.bulkUpdate(
          "Users",
          {
            name: seed.name,
            surname: seed.surname,
            fk_role_id: roleMap[seed.roleCode],
            updatedAt: new Date(),
          },
          { phoneNumber: seed.phoneNumber }
        );
      } else {
        userId = uuidv4();
        await queryInterface.bulkInsert("Users", [
          {
            id: userId,
            name: seed.name,
            surname: seed.surname,
            phoneNumber: seed.phoneNumber,
            fk_role_id: roleMap[seed.roleCode],
            deleted: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      }

      // Auth asociado
      const [existingAuths] = await queryInterface.sequelize.query(
        `SELECT id FROM "Auth" WHERE email = :email`,
        { replacements: { email: seed.email } }
      );

      if (existingAuths.length) {
        await queryInterface.bulkUpdate(
          "Auth",
          {
            username: seed.username,
            password: await bcrypt.hash("Vilo123456.", 10),
            type: "user",
            fk_user_id: userId,
            fk_client_id: null,
            lastSession: new Date(),
            updatedAt: new Date(),
          },
          { email: seed.email }
        );
      } else {
        await queryInterface.bulkInsert("Auth", [
          {
            id: uuidv4(),
            username: seed.username,
            email: seed.email,
            password: await bcrypt.hash("Vilo123456.", 10),
            type: "user",
            fk_user_id: userId,
            fk_client_id: null,
            lastSession: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      }
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Auth", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
