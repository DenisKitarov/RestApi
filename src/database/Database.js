const Sequelize = require('sequelize');

const sequelize = new Sequelize("coupon_db", "postgres", "12345",{
    host: "localhost",
    dialect: "postgres"
});

module.exports = sequelize;