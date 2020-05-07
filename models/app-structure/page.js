// Sequelize connection
const connection = require(__connect_app_structure_db);

// initialization of Sequelize
const Sequelize = require("sequelize");

const Page = connection.define(
    "page",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            defaultValue: "Test page-name"
        },
        title: {
            type: Sequelize.STRING,
            defaultValue: "Test page-title"
        },
        url: {
            type: Sequelize.STRING,
            defaultValue: "/"
        },
        sideBarOrderNum: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: -1
        },
        navBarOrderNum: {
            type: Sequelize.INTEGER,
            defaultValue: -1
        }
    },
    {
        timestamps: false,
        freezeTableName: false // disable pluralizing table names,
        // schema: "AppStructure"
    }
);

// ----------- MAIN FUNCTIONS -----------
Page.getAllPages = async () => {
    try {
        const pages = await Page.findAll();
        return pages;
    } catch (err) {
        console.log(err);
    }
};

module.exports = Page;
