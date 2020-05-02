const path = require("path");

// ------ ROOT ------
global.__root = path.join(__dirname, "..");

// ------ Classes ------
global.__classes = path.join(__root, "classes");

// ------ Config ------
global.__config = path.join(__root, "config");
global.__config_env = path.join(__config, "config-env");
// ------ APP structure DB connect
global.__connect_app_structure_db = path.join(__config, "connect-app-structure-db");

// ------ Controllers ------
global.__controllers = path.join(__root, "controllers");
global.__main_controller = path.join(__controllers, "main");
global.__auth_controller = path.join(__controllers, "auth");
global.__error_controller = path.join(__controllers, "error");

// ------ Data ------
global.__data = path.join(__root, "data");
global.__app_structure_db = path.join(__data, "app-structure", "app-structure-db.sqlite");

// ------ ENV ------
global.__env = path.join(__root, "env");

// ------ Functions ------
global.__functions = path.join(__root, "functions");
global.__messages = path.join(__functions, "messages");
global.__admin_lte_setter = path.join(__functions, "admin-lte-setter");

// ------ Middleware ------
global.__middleware = path.join(__root, "middleware");

// ------ DB models ------
global.__models = path.join(__root, "models");

// ------ Public ------
global.__public = path.join(__root, "public");

// ------ Routes ------
global.__routes = path.join(__root, "routes");
global.__main_routes = path.join(__routes, "main");
global.__auth_routes = path.join(__routes, "auth");

// ------ Util ------
global.__util = path.join(__root, "util");

// ------ Views ------
global.__views = path.join(__root, "views");
