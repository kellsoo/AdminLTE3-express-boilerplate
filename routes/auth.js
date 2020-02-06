// Node core Modules
const path = require("path");

// 3rd party Modules
const express = require("express");

// Auth controller
const authController = require(__auth_controller);
// initialization of router
const router = express.Router();

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

module.exports = router;
