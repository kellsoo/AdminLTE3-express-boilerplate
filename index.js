// Node core modules
const path = require("path");

// Initialize express app
const express = require("express");
const app = express();

// Set global variables
require(path.join(__dirname, "config", "global-variables"));

// Set admin lte static and assets files
require(__admin_lte_setter)(app, express);

// Middleware modules
const bodyParser = require("body-parser");
const logger = require("morgan");

const errorController = require(path.join(__error_controller));

// classes
const messages = require(__messages);

// env
require(__config_env);

app.set("view engine", "ejs");
app.set("views");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

// Set static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
const mainRoutes = require(__main_routes);
const authRoutes = require(__auth_routes);

// Main routes
app.use(mainRoutes);
app.use(authRoutes);

// 404 handle
app.use(errorController.get404);

// Environment variables
const PORT = process.env.PORT || 5000;
const IP = process.env.IP || "localhost";

// Server listen
app.listen(PORT, IP, () => {
    console.log(messages.successFirstMethod(`server started on ${IP}:${PORT}...`));
});
