const UserController = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", UserController.login); 
router.use('/project', require('./project'))
router.use("/activities", require("./activities"));

module.exports = router;