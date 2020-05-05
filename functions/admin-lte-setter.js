// Node core modules
const path = require("path");

module.exports = (app, express) => {
    // admin-lte static files
    app.use("/build/", express.static(path.join(__root, "node_modules", "admin-lte", "build")));
    app.use("/dist/", express.static(path.join(__root, "node_modules", "admin-lte", "dist")));
    app.use("/pages/", express.static(path.join(__root, "node_modules", "admin-lte", "pages")));
    app.use("/plugins/", express.static(path.join(__root, "node_modules", "admin-lte", "plugins")));
    app.use("/images/", express.static(path.join(__root, "/images")));
};
