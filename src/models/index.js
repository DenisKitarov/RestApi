const User = require("./User");
const Coupons = require("./Coupons");
const Role = require("./Role");
const UserRole = require("./UserRole");
const Reviews = require("./Reviews");
const ReviewsCoupon = require("./ReviewsCoupon");
const UserCoupons = require("./UserCoupons");


User.hasMany(Reviews, {
    foreignKey: 'user_id', sourceKey: 'id'
});
Reviews.belongsTo(User, {
    foreignKey: 'user_id', target_id: 'id'
});
User.hasMany(UserRole, {
    foreignKey: 'user_id', sourceKey: 'id'
});
UserRole.belongsTo(User, {
    foreignKey: 'user_id', target_id: 'id'
});
User.hasMany(UserCoupons, {
    foreignKey: 'user_id', sourceKey: 'id'
});
UserCoupons.belongsTo(User, {
    foreignKey: 'user_id', target_id: 'id'
});




Coupons.hasMany(UserCoupons, {
    foreignKey: 'coupon_id', sourceKey: 'id'
});
UserCoupons.belongsTo(Coupons, {
    foreignKey: 'coupon_id', target_id: 'id'
});
Coupons.hasMany(ReviewsCoupon, {
    foreignKey: 'coupon_id', sourceKey: 'id'
});
ReviewsCoupon.belongsTo(Coupons, {
    foreignKey: 'coupon_id', target_id: 'id'
});
Coupons.hasMany(Reviews, {
    foreignKey: 'coupon_id', sourceKey: 'id'
});
Reviews.belongsTo(Coupons, {
    foreignKey: 'coupon_id', target_id: 'id'
});



Role.hasMany(UserRole, {
    foreignKey: 'role_id', sourceKey: 'id'
});
UserRole.belongsTo(Role, {
    foreignKey: 'role_id', target_id: 'id'
});




Reviews.hasMany(ReviewsCoupon, {
    foreignKey: 'review_id', sourceKey: 'id'
});
ReviewsCoupon.belongsTo(Reviews, {
    foreignKey: 'review_id', target_id: 'id'
});