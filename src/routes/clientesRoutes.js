const express = require("express");
const clienteController = require("../controllers/clienteController");
const router = express.Router();

router.post("/", clienteController.create);

router.get("/", clienteController.getAll);

router.get("/:id", clienteController.getById);

router.put("/:id", clienteController.update);

router.delete("/:id", clienteController.delete);

module.exports = router;
