// Node core Modules
const path = require("path");

// 3rd party Modules
const express = require("express");

// Auth controller
const adminController = require(__admin_controller);
// initialization of router
const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("test");
    res.send("test");
});

module.exports = router;
