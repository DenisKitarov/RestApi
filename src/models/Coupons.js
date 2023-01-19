//const sequelize = require("../db");
const DataTypes = require("sequelize");
const sequelize = require('../database/Database')

const Coupons = sequelize.define("coupons", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
       
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
        
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
        
    }
},
{
    timestamps: false
});

module.exports = Coupons;