const express = require("express");
const ServicoController = require("../controllers/servicoController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Serviços
 *   description: Endpoints relacionados a Serviços
 */

/**
 * @swagger
 * /servico:
 *   post:
 *     summary: Cria um novo serviço.
 *     tags: [Serviços]
 *     requestBody:
 *       description: Dados do novo serviço a ser criado.
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "Nome do serviço"
 *             descricao: "Perfuração"
 *             preco: 100.0
 *             profissional: ["id1", "id2"]
 *     responses:
 *       201:
 *         description: Serviço criado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               servico: { ... }
 */

router.post("/", ServicoController.createServico);

/**
 * @swagger
 * /servico:
 *   get:
 *     summary: Retorna todos os serviços.
 *     tags: [Serviços]
 *     responses:
 *       200:
 *         description: Sucesso ao obter a lista de serviços.
 *         content:
 *           application/json:
 *             example:
 *               servicos: [...]
 */

router.get("/", ServicoController.getAllServicos);

/**
 * @swagger
 * /servico/{id}:
 *   get:
 *     summary: Retorna um serviço específico pelo ID.
 *     tags: [Serviços]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do serviço a ser recuperado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso ao obter o serviço.
 *         content:
 *           application/json:
 *             example:
 *               servico: { ... }
 */

router.get("/:id", ServicoController.getServicoById);

/**
 * @swagger
 * /servico/{id}:
 *   put:
 *     summary: Atualiza um serviço existente pelo ID.
 *     tags: [Serviços]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do serviço a ser atualizado.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Novos dados para atualização do serviço.
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "Novo Nome do Serviço"
 *             descricao: "Nova Descrição"
 *             preco: 120.0
 *     responses:
 *       200:
 *         description: Serviço atualizado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               servico: { ... }
 */

router.put("/:id", ServicoController.updateServico);

/**
 * @swagger
 * /servico/{id}:
 *   delete:
 *     summary: Deleta um serviço existente pelo ID.
 *     tags: [Serviços]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do serviço a ser deletado.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Serviço deletado com sucesso.
 */

router.delete("/:id", ServicoController.deleteServico);

module.exports = router;
