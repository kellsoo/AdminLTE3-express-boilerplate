// Node core modules
const path = require("path");

// 3rd party modules
const express = require("express");
const bodyParser = require("body-parser");
// Initialize express app
const app = express();

// messages
let messages;

const setGlobalVariables = require(path.join(__dirname, "config", "global-variables")).setGlobalVariables;
setGlobalVariables()
    .then((message) => {
        // Modules
        const mainRoutes = require(__main_routes);
        const authRoutes = require(__auth_routes);

        const errorController = require(path.join(__error_controller));

        // classes
        messages = require(__messages);

        // env
        require(__config_env);

        console.log(messages.successFirstMethod(message));

        app.set("view engine", "ejs");
        app.set("views");

        // Body-parser, false means that you cannot parse nested objects!!!!
        app.use(bodyParser.urlencoded({ extended: false }));

        // Set static files
        app.use(express.static(path.join(__dirname, "public")));

        // admin-lte static files
        app.use("/build/", express.static(path.join(__root, "node_modules", "admin-lte", "build")));
        app.use("/dist/", express.static(path.join(__root, "node_modules", "admin-lte", "dist")));
        app.use("/pages/", express.static(path.join(__root, "node_modules", "admin-lte", "pages")));
        app.use("/plugins/", express.static(path.join(__root, "node_modules", "admin-lte", "plugins")));

        // Environment variables
        const PORT = process.env.PORT || 5000;
        const IP = process.env.ip || "localhost";

        // Main routes
        app.use(mainRoutes);
        app.use(authRoutes);

        // 404 handle
        app.use(errorController.get404);

        // Server listen
        app.listen(PORT, IP, () => {
            console.log(messages.successMethod(`server started on ${IP}:${PORT}...`));
        });
    })
    .catch((err) => console.log(err));
