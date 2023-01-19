//const sequelize = require("../db");
const DataTypes = require("sequelize");
const sequelize = require('../database/Database')

const Reviews = sequelize.define("reviews", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
       
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    coupon_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        
        
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        
       
    }
},
{
    timestamps: false
});


module.exports = Reviews;