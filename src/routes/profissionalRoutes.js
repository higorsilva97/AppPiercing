// profissionalRoutes.js
const express = require('express');
const ProfissionalController = require('../controllers/profissionalController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Profissionais
 *   description: Endpoints relacionados a Profissionais
 */

/**
 * @swagger
 * /profissional:
 *   post:
 *     summary: Cria um novo profissional.
 *     tags: [Profissionais]
 *     requestBody:
 *       description: Dados do novo profissional a ser criado.
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "Nome do Profissional"
 *             email: "profissional@email.com"
 *             senha: "senha123"
 *             telefone: "123456789"
 *             servicos: ["id1", "id2"]
 *             piercings: ["id1", "id2"]
 *     responses:
 *       201:
 *         description: Profissional criado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               profissional: { ... }
 */

router.post('/', ProfissionalController.createProfissional);

/**
 * @swagger
 * /profissional:
 *   get:
 *     summary: Retorna todos os profissionais.
 *     tags: [Profissionais]
 *     responses:
 *       200:
 *         description: Sucesso ao obter a lista de profissionais.
 *         content:
 *           application/json:
 *             example:
 *               profissionais: [...]
 */

router.get('/', ProfissionalController.getAllProfissionais);

/**
 * @swagger
 * /profissional/{id}:
 *   get:
 *     summary: Retorna um profissional específico pelo ID.
 *     tags: [Profissionais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do profissional a ser recuperado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso ao obter o profissional.
 *         content:
 *           application/json:
 *             example:
 *               profissional: { ... }
 */

router.get('/:id', ProfissionalController.getProfissionalById);

/**
 * @swagger
 * /profissional/{id}:
 *   put:
 *     summary: Atualiza um profissional existente pelo ID.
 *     tags: [Profissionais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do profissional a ser atualizado.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Novos dados para atualização do profissional.
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "Novo Nome do Profissional"
 *             telefone: "987654321"
 *     responses:
 *       200:
 *         description: Profissional atualizado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               profissional: { ... }
 */

router.put('/:id', ProfissionalController.updateProfissional);

/**
 * @swagger
 * /profissional/{id}:
 *   delete:
 *     summary: Deleta um profissional existente pelo ID.
 *     tags: [Profissionais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do profissional a ser deletado.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Profissional deletado com sucesso.
 */

router.delete('/:id', ProfissionalController.deleteProfissional);

module.exports = router;
