"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        { created_at: new Date(), updated_at: new Date(), name: "super_user" },
        { created_at: new Date(), updated_at: new Date(), name: "manager" },
        { created_at: new Date(), updated_at: new Date(), name: "admin" },
        { created_at: new Date(), updated_at: new Date(), name: "purchasing" },
        { created_at: new Date(), updated_at: new Date(), name: "barista" },
        { created_at: new Date(), updated_at: new Date(), name: "cashier" },
        { created_at: new Date(), updated_at: new Date(), name: "courir" },
        { created_at: new Date(), updated_at: new Date(), name: "user" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
