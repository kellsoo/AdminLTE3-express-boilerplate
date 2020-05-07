// Node modules
const path = require("path");

// 3rd party modules
const Sequelize = require("sequelize");
const chalk = require("chalk");

// Messages
const messages = require(__messages);

// initializing
const sequelize = new Sequelize({ dialect: "sqlite", storage: __app_structure_db, logging: false });

sequelize
    .authenticate()
    .then(() => {
        let msg = `${chalk.underline.blue("app structure DB")} connected...`;
        console.log(messages.successFirstMethod(msg));
    })
    .catch((err) => {
        let msg = "Unable to connect to the database:";
        return messages.errorSimpleMethod(msg, err);
    });

module.exports = sequelize;
