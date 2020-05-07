// Node core modules
const path = require("path");

// classes and function
const pages = require(path.join(__functions, "pages"));
const AppStructure = require(path.join(__classes, "AppStructure"));

// admin-lte db models
const Page = require(path.join(__app_structure_models, "page"));
const App = require(path.join(__app_structure_models, "app"));

const TreeView = require(path.join(__app_structure_models, "tree-view"));

Page.getAllPages();
App.getApp();

const currentUser = {
    name: "Petko",
    url: "/profile"
};

const homeView = pages.cretePage("home", "home", "/", "tachometer-alt");
const testView = pages.cretePage("test", "test", "/test", "tachometer-alt");
const testView2 = pages.cretePage("test", "test2", "/test_test", "tachometer-alt");

const pageList = [];
pageList.push(homeView);
pageList.push(testView);
pageList.push(testView2);

const navBar = [];
navBar.push(homeView);
navBar.push(testView);
navBar.push(testView2);
navBar.push(testView2);

const sideBar = [];
const treeView = pages.creteTreeView("Jasná", "tachometer-alt", []);
const treeView2 = pages.creteTreeView("Jasná", "tachometer-alt", []);

sideBar.push(homeView);
sideBar.push(treeView);
sideBar.push(treeView2);
treeView.pages.push(homeView);
treeView.pages.push(testView);
treeView.pages.push(testView2);
treeView.pages.push(testView2);

treeView2.pages.push(testView);
treeView2.pages.push(testView2);

const mainAppStructure = new AppStructure("adminLTE3", currentUser, pageList, navBar, sideBar, "blue", "dark");

module.exports = mainAppStructure;
