const ProjectController = require("../controllers/projectController");

const router = require("express").Router();


router.post('/', ProjectController.createProject)
router.get('/', ProjectController.viewProject)
router.put('/:id', ProjectController.editProjectById)
router.delete('/:id', ProjectController.deleteProjectById)


module.exports = router;