const ActivityController = require("../controllers/activityController");

const router = require("express").Router();


router.get('/', ActivityController.viewActivity)
router.post('/', ActivityController.createActivity)
router.put('/:id', ActivityController.editActivityById)
router.delete('/:id', ActivityController.deleteActivity)

module.exports = router