const express = require("express");
const piercingController = require("../controllers/piercingController");
const router = express.Router();

router.post("/", piercingController.createPiercing);

router.get("/", piercingController.getAllPiercings);

router.get("/:id", piercingController.getPiercingById);

router.put("/:id", piercingController.updatePiercing);

router.delete("/:id", piercingController.deletePiercing);

module.exports = router;
