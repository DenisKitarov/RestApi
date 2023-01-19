//const sequelize = require("../db");
const DataTypes = require("sequelize");
const sequelize = require('../database/Database')

const UserCoupons = sequelize.define("user_coupons", {
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
    coupon_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    date_used: {
        type: DataTypes.DATE,
        allowNull: false,
        
    },
    is_used: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        
    }
},
{
    timestamps: false
});

module.exports = UserCoupons;