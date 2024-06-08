const UserController = require("../controllers/userController");
const authentication = require('../middlewares/authentication')

const router = require("express").Router();

router.post("/login", UserController.login); 
router.post("/register",UserController.register);

router.use(authentication)


router.use('/project', require('./project'))
router.use("/activities", require("./activities"));

module.exports = router;