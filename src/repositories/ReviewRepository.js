const sequelize = require('../db');
const Coupons = require('../models/Coupons');
const User = require('../models/User');
const Review = require('../models/Reviews')

class ReviewRepository {
    async GetAll() {
        return await Review.findAll();
    }

    async GetDetailedById(reviewId) {
        return await Review.findOne({
            include: [Coupons, User],
            where: {
                id: reviewId
            }
        });
    }

    async Create(review) {
        return Review.create(review);
    }

    async EditById(reviewId, review) {
        await Review.update(review, {
            where: {
                id: reviewId
            }
        });

        return await this.GetDetailedById(reviewId);
    }

    async DeleteById(reviewId) {
        await Review.destroy({
            where: {
                id: reviewId
            }
        });
    }
}

module.exports = new ReviewRepository();
