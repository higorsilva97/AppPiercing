const express = require("express");
const estudioController = require("../controllers/estudioController");
const router = express.Router();

router.post("/", estudioController.createEstudio);

router.get("/", estudioController.getAllEstudios);

router.get("/:id", estudioController.getEstudioById);

router.put("/:id", estudioController.updateEstudio);

router.delete("/:id", estudioController.deleteEstudio);

module.exports = router;
