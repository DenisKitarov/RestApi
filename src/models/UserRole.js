//const sequelize = require("../db");
const DataTypes = require("sequelize");
const sequelize = require('../database/Database')




const UserRole = sequelize.define("user_role", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
       
        
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
        
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
        
    }
},
    {
        timestamps: false
    });

module.exports = UserRole;