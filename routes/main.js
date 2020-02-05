// Node core modules
const path = require("path");

// 3rd party modules
const express = require("express");

// controllers
const mainController = require(path.join(__controllers, "main"));

const router = express.Router();

router.get("/", mainController.getIndex);

router.get("/test_test", (req, res, next) => {
    const sideBar = [];

    const sideBarItem = {
        name: "test",
        icon: "nav-icon fas fa-tree",
        href: "/"
    };

    res.status(200).render("test", {
        pageTitle: "test"
    });
});

module.exports = router;
