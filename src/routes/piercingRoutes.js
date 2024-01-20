const express = require("express");
const piercingController = require("../controllers/piercingController");
const router = express.Router();
const verificarToken = require("../middlewares/verificarToken");


/**
 * @swagger
 * tags:
 *   name: Piercings
 *   description: Endpoints relacionados a Piercings
 */

/**
 * @swagger
 * /piercing:
 *   post:
 *     summary: Cria um novo piercing.
 *     tags: [Piercings]
 *     requestBody:
 *       description: Dados do novo piercing a ser criado.
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "Piercing"
 *             descricao: "Piercing de aço inoxidável"
 *             preco: 29.99
 *             estoque: 50
 *             categoria: "Categoria do Piercing"
 *             local: "Local do Piercing"
 *     responses:
 *       201:
 *         description: Piercing criado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               piercing: { ... }
 */

router.post("/", verificarToken, piercingController.createPiercing);

/**
 * @swagger
 * /piercing:
 *   get:
 *     summary: Retorna todos os piercings.
 *     tags: [Piercings]
 *     responses:
 *       200:
 *         description: Sucesso ao obter a lista de piercings.
 *         content:
 *           application/json:
 *             example:
 *               piercings: [...]
 */

router.get("/", piercingController.getAllPiercings);

/**
 * @swagger
 * /piercing/{id}:
 *   get:
 *     summary: Retorna um piercing específico pelo ID.
 *     tags: [Piercings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do piercing a ser recuperado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso ao obter o piercing.
 *         content:
 *           application/json:
 *             example:
 *               piercing: { ... }
 */

router.get("/:id", piercingController.getPiercingById);

/**
 * @swagger
 * /piercing/{id}:
 *   put:
 *     summary: Atualiza um piercing existente pelo ID.
 *     tags: [Piercings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do piercing a ser atualizado.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Novos dados para atualização do piercing.
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "Novo Nome do Piercing"
 *             descricao: "Nova Descrição"
 *             preco: 39.99
 *             estoque: 30
 *             categoria: "Nova Categoria"
 *             local: "Novo Local"
 *     responses:
 *       200:
 *         description: Piercing atualizado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               piercing: { ... }
 */

router.put("/:id", piercingController.updatePiercing);

/**
 * @swagger
 * /piercing/{id}:
 *   delete:
 *     summary: Deleta um piercing existente pelo ID.
 *     tags: [Piercings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do piercing a ser deletado.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Piercing deletado com sucesso.
 */

router.delete("/:id", piercingController.deletePiercing);

module.exports = router;
