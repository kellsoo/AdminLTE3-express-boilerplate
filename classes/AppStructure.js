// 3rd party modules
const _ = require("lodash");

class AppStructure {
    constructor(appName, currentUser, pageList, navBar, sideBar, navBarColor, sideBarColor) {
        // appName is title title of whole template
        this.appName = appName;
        // active user
        this.user = currentUser;
        // list of page
        this.pageList = pageList;
        this.navBar = navBar;
        this.sideBar = sideBar;
        this.navBarColor = navBarColor;
        this.sideBarColor = sideBarColor;
    }

    setInactive() {
        if (this.currentPage) {
            this.currentPage.status = "inactive";
        }
    }

    getCurrentPage(url) {
        if (this.currentPage) {
            this.currentPage.status = "inactive";
        }
        this.currentPage = this.pageList.find((page) => page.url === url);
        this.currentPage.status = "active";
        return this.currentPage;
    }

    addPageToNavBar(page) {
        this.navBar.push(page);
    }

    addTreePageToSideBar(treePage) {
        this.sideBar.push(treePage);
    }

    addPageToTreeView(treeViewTitle, page) {
        const foundTreeView = this.sideBar.find((treeView) => treeView.title === treeViewTitle);
        if (foundTreeView) {
            if (_.isArray(foundTreeView.pages)) foundTreeView.pages.push(page);
        }
    }

    setActivePage(url) {
        this.navBar.forEach((page) => {
            if (page.url === this.lastActiveUrl) {
                page.status = "inactive";
            }
            if (page.url === url) {
                page.status = "active";
                this.lastActiveUrl = url;
            }
        });
    }
}

module.exports = AppStructure;
