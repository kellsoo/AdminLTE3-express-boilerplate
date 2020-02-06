// Error controller - views/404.ejs
// Node Core modules
const path = require("path");

// AppStructure
const appStructure = require(path.join(__config, "set-views"));

exports.get404 = (req, res, next) => {
    const currentPage = {
        title: "404",
        name: "Error 404"
    };

    appStructure.setInactive();

    res.status(404).render("404", {
        currentPage,
        appStructure
    });
    // res.status("404").send("notfound");
};
