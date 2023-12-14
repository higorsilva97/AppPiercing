const express = require("express");
const estudioController = require("../controllers/estudioController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Estúdios de Piercing
 *   description: Endpoints relacionados a Estúdios de Piercing
 */

/**
 * @swagger
 * /estudio:
 *   post:
 *     summary: Cria um novo estúdio de piercing.
 *     tags: [Estúdios de Piercing]
 *     requestBody:
 *       description: Dados do novo estúdio a ser criado.
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "Nome do Estúdio"
 *             telefone: "123456789"
 *             endereco: "Endereço do Estúdio"
 *             profissionais: ["id1", "id2", "id3"]
 *     responses:
 *       201:
 *         description: Estúdio criado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               estudio: { ... }
 */

router.post("/", estudioController.createEstudio);

/**
 * @swagger
 * /estudio:
 *   get:
 *     summary: Retorna todos os estúdios de piercing.
 *     tags: [Estúdios de Piercing]
 *     responses:
 *       200:
 *         description: Sucesso ao obter a lista de estúdios.
 *         content:
 *           application/json:
 *             example:
 *               estudios: [...]
 */

router.get("/", estudioController.getAllEstudios);

/**
 * @swagger
 * /estudio/{id}:
 *   get:
 *     summary: Retorna um estúdio de piercing específico pelo ID.
 *     tags: [Estúdios de Piercing]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do estúdio a ser recuperado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso ao obter o estúdio.
 *         content:
 *           application/json:
 *             example:
 *               estudio: { ... }
 */

router.get("/:id", estudioController.getEstudioById);

/**
 * @swagger
 * /estudio/{id}:
 *   put:
 *     summary: Atualiza um estúdio de piercing existente pelo ID.
 *     tags: [Estúdios de Piercing]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do estúdio a ser atualizado.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Novos dados para atualização do estúdio.
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "Novo Nome do Estúdio"
 *             telefone: "987654321"
 *             endereco: "Novo Endereço do Estúdio"
 *             profissionais: ["id7", "id2", "id3"]
 *     responses:
 *       200:
 *         description: Estúdio atualizado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               estudio: { ... }
 */

router.put("/:id", estudioController.updateEstudio);

/**
 * @swagger
 * /estudio/{id}:
 *   delete:
 *     summary: Deleta um estúdio de piercing existente pelo ID.
 *     tags: [Estúdios de Piercing]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do estúdio a ser deletado.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Estúdio deletado com sucesso.
 */

router.delete("/:id", estudioController.deleteEstudio);

module.exports = router;
