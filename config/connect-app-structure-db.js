// Node modules
const path = require("path");

// 3rd party modules
const Sequelize = require("sequelize");

// Messages
const messages = require(__messages);

// console.log("test");

// initializing
const sequelize = new Sequelize({ dialect: "sqlite", storage: __app_structure_db });

sequelize
    .authenticate()
    .then(() => {
        let msg = `app structure db connected...`;
        console.log(messages.successFirstMethod(msg));
    })
    .catch((err) => {
        console.log(err);
        let msg = "Unable to connect to the database:";
        return messages.errorSimpleMethod(msg, err);
    });

module.exports = sequelize;
