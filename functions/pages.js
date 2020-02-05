// create as class

// normal page on top navigation bar or side bar, attention top-nav-bar doesn't have icon!!!!
module.exports.cretePage = (title, name, url, icon) => {
    const pageObject = {};

    // title of web page
    pageObject.title = title;

    // name in the tree
    pageObject.name = name;

    // url to page - every - pages with url is set to active
    pageObject.url = url;

    pageObject.icon = `nav-icon fas fa-${icon}`;

    // Page can be active || inactive
    pageObject.status = "inactive";

    return pageObject;
};

// Pages is array of normal Pages - (title, url, icon)
module.exports.creteTreeView = (title, icon, pages) => {
    const treeViewObject = {};

    treeViewObject.title = title;
    treeViewObject.icon = `nav-icon fas fa-${icon}`;
    treeViewObject.pages = pages;

    // treeview can be open || closed
    treeViewObject.status = "closed";

    return treeViewObject;
};
