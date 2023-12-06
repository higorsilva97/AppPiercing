const express = require("express");
const piercingController = require("../controllers/piercingController");
const router = express.Router();

router.post("/", piercingController.create);

router.get("/", piercingController.getAll);

router.get("/:id", piercingController.getById);

router.put("/:id", piercingController.update);

router.delete("/:id", piercingController.delete);

module.exports = router;
