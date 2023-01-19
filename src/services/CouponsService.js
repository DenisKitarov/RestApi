const couponsRepository = require('../repositories/CouponRepository');

class CouponsService {
    async GetAll() {
        return await couponsRepository.GetAll();
    }

    async GetDetailedById(couponId) {
        return await couponsRepository.GetDetailedById(couponId);
    }

    async Create(coupon) {
        return await couponsRepository.Create(coupon);
    }

    async EditById(couponId, coupon) {
        return await couponsRepository.EditById(couponId, coupon);
    }

    async DeleteById(couponId) {
        return await couponsRepository.DeleteById(couponId);
    }
}

module.exports = new CouponsService();