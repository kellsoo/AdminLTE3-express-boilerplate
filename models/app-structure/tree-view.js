// Sequelize connection
const connection = require(__connect_app_structure_db);

// initialization of Sequelize
const Sequelize = require("sequelize");

const TreeView = connection.define(
    "treeView",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            defaultValue: "test treeView"
        },
        icon: {
            type: Sequelize.STRING
        },
        sideBarOrderNum: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
    {
        timestamps: false,
        freezeTableName: false // disable pluralizing table names,
        // schema: "AppStructure"
    }
);

module.exports = TreeView;
