'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   const data = require('../data/projects.json').map(el => {
    el.createdAt = new Date()
    el.updatedAt = new Date()
    return el;
   })
  //  console.log(data);
   await queryInterface.bulkInsert('Projects', data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', {})
  }
};
