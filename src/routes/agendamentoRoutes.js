const express = require("express");
const agendamentoController = require("../controllers/agendamentoController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Agendamentos
 *   description: Endpoints relacionados a Agendamentos
 */

/**
 * @swagger
 * /agendamento:
 *   post:
 *     summary: Cria um novo agendamento.
 *     tags: [Agendamentos]
 *     requestBody:
 *       description: Dados do novo agendamento a ser criado.
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             data: "2023-12-15"
 *             hora: "15:00"
 *             cliente: "ID do Cliente"
 *             profissional: "ID do Profissional"
 *             piercing: "ID do Piercing"
 *             servico: "ID do Serviço"
 *             estudio: "ID do Estúdio"
 *     responses:
 *       201:
 *         description: Agendamento criado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               agendamento: { ... }
 */

router.post("/", agendamentoController.createAgendamento);

/**
 * @swagger
 * /agendamento:
 *   get:
 *     summary: Retorna todos os agendamentos.
 *     tags: [Agendamentos]
 *     responses:
 *       200:
 *         description: Sucesso ao obter a lista de agendamentos.
 *         content:
 *           application/json:
 *             example:
 *               agendamentos: [...]
 */

router.get("/", agendamentoController.getAllAgendamentos);

/**
 * @swagger
 * /agendamento/{id}:
 *   get:
 *     summary: Retorna um agendamento específico pelo ID.
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do agendamento a ser recuperado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso ao obter o agendamento.
 *         content:
 *           application/json:
 *             example:
 *               agendamento: { ... }
 */

router.get("/:id", agendamentoController.getAgendamentoById);

/**
 * @swagger
 * /agendamento/{id}:
 *   put:
 *     summary: Atualiza um agendamento existente pelo ID.
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do agendamento a ser atualizado.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Novos dados para atualização do agendamento.
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             data: "2023-12-16"
 *             hora: "16:00"
 *             cliente: "Novo ID do Cliente"
 *             profissional: "Novo ID do Profissional"
 *             piercing: "Novo ID do Piercing"
 *             servico: "Novo ID do Serviço"
 *             estudio: "Novo ID do Estúdio"
 *     responses:
 *       200:
 *         description: Agendamento atualizado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               agendamento: { ... }
 */

router.put("/:id", agendamentoController.updateAgendamento);

/**
 * @swagger
 * /agendamento/{id}:
 *   delete:
 *     summary: Deleta um agendamento existente pelo ID.
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do agendamento a ser deletado.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Agendamento deletado com sucesso.
 */

router.delete("/:id", agendamentoController.deleteAgendamento);

module.exports = router;
