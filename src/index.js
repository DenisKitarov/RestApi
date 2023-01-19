//const express = require('express');
const app = require('./app');
const loader = require("./loader");
const sequelize = require('./database/Database');


require('./models');


async function main() {
    try {

        await sequelize.sync();
    } catch (error) {
        console.error("Unable to connect to the database", error);
    }

    //await sequelize.sync({force:false});
    app.listen(5558, () => console.log("Server is listening on port", 5558));

}
main();
