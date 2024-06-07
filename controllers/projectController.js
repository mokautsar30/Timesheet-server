
class ProjectController {
    static async createProject(req, res) {
        try {
            console.log('this is from project');
        } catch (error) {
            console.log(error);
        }
    }
    static async viewProject(req, res) {
        try {
            res.status(200).json({message: 'get project'})
        } catch (error) {
            res.status(500).json({message: 'internal server error'})
        }
    }
}



module.exports = ProjectController;