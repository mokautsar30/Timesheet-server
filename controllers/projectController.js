const { Op } = require('sequelize');
const {Project} = require('../models')


class ProjectController {
    static async createProject(req, res) {
        try {
            const project = req.body;
            project.userId = req.user.id;

            const data = await Project.create(project);
            res.status(201).json(data)
        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'internal server error'})
        }
    }
    static async viewProject(req, res) {
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
            const data = await Project.findAll(options);
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({message: 'internal server error'})
          }
        }
}



module.exports = ProjectController;