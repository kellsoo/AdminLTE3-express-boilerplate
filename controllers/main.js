const path = require("path");

const appStructure = require(path.join(__config, "set-views"));

module.exports.getIndex = (req, res, next) => {
    const currentPage = appStructure.getCurrentPage("/");
    res.render("index", { currentPage, appStructure });
};
