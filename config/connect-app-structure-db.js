// Node modules
const path = require("path");

// 3rd party modules
const Sequelize = require("sequelize");

// Messages
const messages = require(__messages);

// initializing
const sequelize = new Sequelize({ dialect: "sqlite", storage: __app_structure_db, logging: false });

sequelize
    .authenticate()
    .then(() => {
        let msg = `app structure db connected...`;
        console.log(messages.successMethod(msg));
    })
    .catch((err) => {
        let msg = "Unable to connect to the database:";
        return messages.errorSimpleMethod(msg, err);
    });

module.exports = sequelize;
