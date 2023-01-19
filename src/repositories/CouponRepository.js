const Review = require('../models/Reviews');
const User = require('../models/User');
const Coupon = require('../models/Coupons');

class CouponRepository {
    async GetAll() {
        return await Coupon.findAll();
    }

    async GetDetailedById(couponId) {
        return await Coupon.findOne({
            include: [Review, User],
            where: {
                id: couponId
            }
        });
    }

    async Create(coupon) {
        return Coupon.create(coupon);
    }

    async EditById(couponId, coupon) {
        await Coupon.update(coupon, {
            where: {
                id: couponId
            }
        });

        return await this.GetDetailedById(couponId);
    }

    async DeleteById(couponId) {
        await Coupon.destroy({
            where: {
                id: couponId
            }
        });
    }
}

module.exports = new CouponRepository();
