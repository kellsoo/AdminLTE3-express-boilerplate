// Sequelize connection
const connection = require(__connect_app_structure_db);

// initialization of Sequelize
const Sequelize = require("sequelize");

const App = connection.define(
    "app",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        skinColor: {
            type: Sequelize.STRING,
            defaultValue: "blue"
        },
        sideBarSkin: {
            type: Sequelize.STRING,
            defaultValue: "light"
        }
    },
    {
        timestamps: false,
        freezeTableName: false, // disable pluralizing table names,
        schema: "AppStructure"
    }
);

App.getApp = async () => {
    const app = await App.findByPk(1);
    if (!app) throw new Error("No app Find");
    console.log(app.getDataValue("name"));
    return app.dataValues;
};

module.exports = App;
