const express = require("express");
const ProfissionalController = require("../controllers/profissionalController");
const router = express.Router();

router.post("/", ProfissionalController.create);

router.get("/", ProfissionalController.getAll);

router.get("/:id", ProfissionalController.getById);

router.put("/:id", ProfissionalController.update);

router.delete("/:id", ProfissionalController.delete);

module.exports = router;
