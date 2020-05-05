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
global.__admin_controller = path.join(__controllers, "admin");
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
global.__admin_routes = path.join(__routes, "admin");

// ------ Util ------
global.__util = path.join(__root, "util");

// ------ Views ------
global.__views = path.join(__root, "views");
// Includes
global.__includes = path.join(__views, "includes");
// Document structure
global.__document_structure = path.join(__includes, "document-structure");
global.__head_of_page = path.join(__document_structure, "head");
global.__first_part_of_page = path.join(__document_structure, "first-part");
global.__end_of_page = path.join(__document_structure, "end");
global.__last_part_of_page = path.join(__document_structure, "last-part");
// Navigation
global.__navigation = path.join(__includes, "navigation");
global.__top_navigation = path.join(__navigation, "top-navigation");
global.__nav_item = path.join(__navigation, "nav-item");

// - nav-structure
global.__nav_structure = path.join(__navigation, "nav-structure");
global.__start_nav_item = path.join(__nav_structure, "start-nav-item");
global.__end_nav_item = path.join(__nav_structure, "end-nav-item");

// - top-navigation-objects
global.__top_navigation_objects = path.join(__navigation, "top-navigation-objects");
global.__search_form = path.join(__top_navigation_objects, "search-form");
global.__left_navbar_links = path.join(__top_navigation_objects, "left-navbar-links");
global.__right_navbar_links = path.join(__top_navigation_objects, "right-navbar-links");

//  - sidebar
global.__sidebar_navigation = path.join(__navigation, "sidebar", "sidebar");
