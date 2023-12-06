const express = require("express");
const estudioController = require("../controllers/estudioController");
const router = express.Router();

router.post("/", estudioController.create);

router.get("/", estudioController.getAll);

router.get("/:id", estudioController.getById);

router.put("/:id", estudioController.update);

router.delete("/:id", estudioController.delete);

module.exports = router;
