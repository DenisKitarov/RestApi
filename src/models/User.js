//const sequelize = require("../db");
const DataTypes = require("sequelize");
const sequelize = require('../database/Database')

const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
       
    },
    phone : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
       
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
       
    }

},
{
    timestamps: false
});

module.exports = User;



