const express = require("express");
const ProfissionalController = require("../controllers/profissionalController");
const router = express.Router();

router.post("/", ProfissionalController.createProfissional);

router.get("/", ProfissionalController.getAllProfissionais);

router.get("/:id", ProfissionalController.getProfissionalById);

router.put("/:id", ProfissionalController.updateProfissional);

router.delete("/:id", ProfissionalController.deleteProfissional);

module.exports = router;
