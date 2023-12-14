const express = require("express");
const agendamentoController = require("../controllers/agendamentoController");
const router = express.Router();

router.post("/", agendamentoController.createAgendamento);

router.get("/", agendamentoController.getAllAgendamentos);

router.get("/:id", agendamentoController.getAgendamentoById);

router.put("/:id", agendamentoController.updateAgendamento);

router.delete("/:id", agendamentoController.deleteAgendamento);

module.exports = router;
