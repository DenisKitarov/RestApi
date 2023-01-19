const reviewService = require('../services/ReviewService');

class ReviewController {
    async GetAll(req, res) {
        res.send(await reviewService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await reviewService.GetDetailedById(req.params.id))
    }

    async Create(req, res) {
        let review = {
            coupon_id: req.body.coupon_id,
            user_id: req.body.user_id,
            date: req.body.date,
            rate: req.body.rate,
            comment: req.body.comment
        };

        res.send(await reviewService.CreateOne(review));
    }

    async EditById(req, res) {
        let review = {
            couponId: req.body.couponId,
            userId: req.body.userId,
            date: req.body.date,
            rate: req.body.rate,
            comment: req.body.comment
        };

        res.send(await reviewService.EditById(req.params.id, review));
    }

    async DeleteById(req, res) {
        await reviewService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new ReviewController();