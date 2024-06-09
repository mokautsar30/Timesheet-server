const { Op } = require("sequelize");
const { Activity, User } = require("../models");

class ActivityController {
  static async createActivity(req, res, next) {
    try {
      const activity = req.body;
      activity.userId = req.user.id;

      const data = await Activity.create(activity);
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
  static async viewActivity(req, res, next) {
    try {
      const { search } = req.query;
      const options = {};
      if (search) {
        options.where = {
          name: {
            [Op.iLike]: `%${search}%`,
          },
        };
      }
      const data = await Activity.findAll(options);
      res.status(200).json(data);
    } catch (error) {
      next(error)
    }
  }
  static async editActivityById(req, res, next) {
    try {
      const foundActivity = await Activity.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!foundActivity) {
        throw { name: "ErrorNotFound" };
      }

      const activity = await Activity.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      const updateActivity = await Activity.findByPk(req.params.id);
      res.status(200).json({
        message: `Success update activity by id ${req.params.id}`,
        data: updateActivity,
      });
    } catch (error) {
      next(error)
    }
  }
  static async deleteActivity(req, res, next) {
    try {
      const activityId = req.params.id;
      const activity = await Activity.findOne({
        where: {
          id: activityId,
        },
      });
      if (!activity) {
        throw { name: "ErrorNotFound" };
      }
      await activity.destroy();
      res.status(200).json({
        message: `Success delete activity by id ${req.params.id}`,
        data: activity,
      });
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ActivityController;
