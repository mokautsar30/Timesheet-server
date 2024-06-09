'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Projects"
          },
          key: "id",
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Users"
          },
          key: "id",
        }
      },
      activityName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateStart: {
        type: Sequelize.DATE
      },
      dateEnd: {
        type: Sequelize.DATE
      },
      timeStart: {
        type: Sequelize.TIME
      },
      timeEnd: {
        type: Sequelize.TIME
      },
      totalPrice: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Activities');
  }
};