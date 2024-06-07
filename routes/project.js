const ProjectController = require("../controllers/projectController");

const router = require("express").Router();


router.post('/', ProjectController.createProject)
router.get('/', ProjectController.viewProject)


module.exports = router;