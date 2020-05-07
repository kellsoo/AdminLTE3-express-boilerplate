// Node core modules
const path = require("path");

const App = require(path.join(__app_structure_models, "app"));
const TreeView = require(path.join(__app_structure_models, "tree-view"));
const Page = require(path.join(__app_structure_models, "page"));

TreeView.hasMany(Page);
Page.belongsTo(TreeView);
