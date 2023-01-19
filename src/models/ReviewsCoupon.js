//const sequelize = require("../db");
const DataTypes = require("sequelize");
const sequelize = require('../database/Database')


const ReviewsCoupon = sequelize.define("reviews_coupons", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            
        },
        review_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
           
        },
        coupon_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        }
    },
    {
        timestamps: false
    });

module.exports = ReviewsCoupon;