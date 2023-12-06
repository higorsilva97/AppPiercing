const express = require("express");

const profissionalRoutes = require("./profissionalRoutes");
const clienteRoutes = require("./clientesRoutes");
const piercingRoutes = require("./piercingRoutes");
const agendamentoRoutes = require("./agendamentoRoutes");
const estudioRoutes = require("./estudioRoutes");

const router = express.Router();

router.use("/profissional", profissionalRoutes);
router.use("/cliente", clienteRoutes);
router.use("/piercing", piercingRoutes);
router.use("/agendamento", agendamentoRoutes);
router.use("/estudio", estudioRoutes);

module.exports = router;
