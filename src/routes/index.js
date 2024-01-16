const express = require("express");

const profissionalRoutes = require("./profissionalRoutes");
const clienteRoutes = require("./clientesRoutes");
const piercingRoutes = require("./piercingRoutes");
const agendamentoRoutes = require("./agendamentoRoutes");
const estudioRoutes = require("./estudioRoutes");
const servicoRoutes = require("./servicoRoutes");

const app = express();

const router = express.Router();

router.use("/profissional", profissionalRoutes);
router.use("/cliente", clienteRoutes);
router.use("/piercing", piercingRoutes);
router.use("/agendamento", agendamentoRoutes);
router.use("/estudio", estudioRoutes);
router.use("/servico", servicoRoutes);


module.exports = router;
