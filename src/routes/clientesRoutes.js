const express = require("express");
const clienteController = require("../controllers/clienteController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Endpoints relacionados a Clientes
 */

/**
 * @swagger
 * /cliente:
 *   post:
 *     summary: Cria um novo cliente.
 *     tags: [Clientes]
 *     requestBody:
 *       description: Dados do novo cliente a ser criado.
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "Cliente Cliente"
 *             email: "cliente@example.com"
 *             senha: "1234656"
 *             telefone: "+55 11 9000-"000
 *             endereco: "Rua Exemplo, 123"
 *             agendamentos: []
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               cliente: { ... }
 */

router.post("/", clienteController.createCliente);

/**
 * @swagger
 * /cliente:
 *   get:
 *     summary: Retorna todos os clientes.
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Sucesso ao obter a lista de clientes.
 *         content:
 *           application/json:
 *             example:
 *               clientes: [...]
 */

router.get("/", clienteController.getAllClientes);

/**
 * @swagger
 * /cliente/{id}:
 *   get:
 *     summary: Retorna um cliente específico pelo ID.
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do cliente a ser recuperado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso ao obter o cliente.
 *         content:
 *           application/json:
 *             example:
 *               cliente: { ... }
 */

router.get("/:id", clienteController.getClienteById);

/**
 * @swagger
 * /cliente/{id}:
 *   put:
 *     summary: Atualiza um cliente existente pelo ID.
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do cliente a ser atualizado.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Novos dados para atualização do cliente.
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "Novo Nome do Cliente"
 *             telefone: "+55 11 98765-4321"
 *             endereco: "Novo Endereço do Cliente"
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               cliente: { ... }
 */

router.put("/:id", clienteController.updateCliente);

/**
 * @swagger
 * /cliente/{id}:
 *   delete:
 *     summary: Deleta um cliente existente pelo ID.
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do cliente a ser deletado.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Cliente deletado com sucesso.
 */

router.delete("/:id", clienteController.deleteCliente);

module.exports = router;
