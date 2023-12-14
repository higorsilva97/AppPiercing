const express = require("express");
const ServicoController = require("../controllers/servicoController");
const router = express.Router();

router.post("/", ServicoController.createServico);

router.get("/", ServicoController.getAllServicos);

router.get("/:id",ServicoController.getServicoById);

router.put("/:id", ServicoController.updateServico);

router.delete("/:id", ServicoController.deleteServico);

module.exports = router;
