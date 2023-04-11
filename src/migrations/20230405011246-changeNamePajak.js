'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('pajaks', 'ops')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('ops', 'pajaks')
  }
}
