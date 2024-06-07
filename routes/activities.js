const ActivityController = require("../controllers/activityController");

const router = require("express").Router();


router.get('/', ActivityController.viewActivity)
router.post('/', ActivityController.createActivity)


module.exports = router