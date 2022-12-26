const { Router } = require("express");
const NotesController = require("../controllers/NotesController");
const ensureAuth = require("../middlewares/ensureAuth");
const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.use(ensureAuth);

notesRoutes.get("/", notesController.index);
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;
