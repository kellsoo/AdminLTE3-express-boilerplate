// Node core modules
const path = require("path");

// classes and function
const pages = require(path.join(__functions, "pages"));
const AppStructure = require(path.join(__classes, "AppStructure"));

const currentUser = {
    name: "Petko",
    url: "/profile"
};

const homeView = pages.cretePage("home", "home", "/", "tachometer-alt");
const testView = pages.cretePage("test", "test", "/test", "tachometer-alt");
const testView2 = pages.cretePage("test", "test2", "/test_test", "tachometer-alt");

const pageList = [];
pageList.push(homeView);
const navBar = [];
navBar.push(homeView);
navBar.push(testView);
navBar.push(testView2);

const sideBar = [];
const treeView = pages.creteTreeView("jasna", "tachometer-alt", []);
sideBar.push(homeView);
sideBar.push(treeView);

const mainAppStructure = new AppStructure("TMR adskubo", currentUser, pageList, navBar, sideBar, "red", "light");

module.exports = mainAppStructure;
