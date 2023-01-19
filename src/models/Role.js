//const sequelize = require("../db");
const DataTypes = require("sequelize");
const sequelize = require('../database/Database')


const Role = sequelize.define("roles", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
       
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        
    }
},
{
    timestamps: false
});

module.exports = Role;