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
    static async editProjectById(req, res){
      try {
        const foundProject = await Project.findOne({
          where: {
            id: req.params.id,
          },
        });
        if (!foundProject) {
          throw { name: "ErrorNotFound" };
        }
  
        const project = await Project.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
  
        const updateProject = await Project.findByPk(req.params.id);
        res.status(200).json({
          message: `Success update project by id ${req.params.id}`,
          data: updateProject,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });
      }
    }
    static async deleteProjectById(req, res) {
      try {
        const projectId = req.params.id;
        const project = await Project.findOne({
          where: {
            id: projectId,
          },
        });
        if (!project) {
          throw { name: "ErrorNotFound" };
        }
        await project.destroy();
        res.status(200).json({
          message: `Success delete project by id ${req.params.id}`,
          data: project,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });
      }
    }
}



module.exports = ProjectController;