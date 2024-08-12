const { Router } = require("express");

const validUser = require("../middlewares/validUser");
const userController = require("../controllers/usersController");
const router = Router();



router.get("/", userController.getAllUsers);

router.get("/:id", userController.getById);

router.post("/", validUser, userController.createUser);

module.exports = router;
