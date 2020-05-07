// Connection to APP structure
const appStructureConnection = require(__connect_app_structure_db);

// App Structure Setter
require(__app_structure_db_setter);

const force = false;

module.exports.connect = async () => {
    await appStructureConnection.sync({ force });
};
