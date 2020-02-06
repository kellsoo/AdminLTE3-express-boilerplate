// Node core modules
const path = require("path");

// 3rd party modules
const express = require("express");

// controllers
const mainController = require(__main_controller);

const router = express.Router();

router.get("/", mainController.getIndex);
router.get("/test", mainController.getTest);

module.exports = router;
