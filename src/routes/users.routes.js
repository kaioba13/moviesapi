const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const ensureAuth = require("../middlewares/ensureAuth");

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuth, usersController.update);

module.exports = usersRoutes;
