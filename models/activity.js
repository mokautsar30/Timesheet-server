'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activity.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Activity.belongsTo(models.Project, {
        foreignKey: "projectId"
      })
    }
  }
  Activity.init({
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    activityName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Activity Name is required",
        }
      }
    },
    dateStart: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          msg: "Date Start must be a valid date",
        }
      }
    },
    dateEnd: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          msg: "Date End must be a valid date",
        },
        isAfter: {
          args: Sequelize.col('dateStart'),
          msg: "Date End must be after Date Start",
        }
      }
    },
    timeStart: DataTypes.TIME,
    timeEnd: DataTypes.TIME,
    totalTime: DataTypes.TIME,
    totalPrice: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: "Total Price must be an integer",
        },
        min: {
          args: [0],
          msg: "Total Price must be a positive value",
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};