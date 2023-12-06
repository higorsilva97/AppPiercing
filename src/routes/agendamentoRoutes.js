const express = require("express");
const agendamentoController = require("../controllers/agendamentoController");
const router = express.Router();

router.post("/", agendamentoController.create);

router.get("/", agendamentoController.getAll);

router.get("/:id", agendamentoController.getById);

router.put("/:id", agendamentoController.update);

router.delete("/:id", agendamentoController.delete);

module.exports = router;
