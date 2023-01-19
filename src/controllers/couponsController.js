
const couponService = require('../services/CouponsService')

class CouponsController{

    async GetAll(req, res) {
        res.send(await couponService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await couponService.GetDetailedById(req.params.id))
    }

    async CreateOne(req, res) {
        let coupon = {
            discount: req.body.discount,
            name: req.body.name,
            amount: req.body.amount,
            start_date: req.body.start_date,
            end_date: req.body.end_date
        };

        res.send(await couponService.Create(coupon));
    }

    async EditById(req, res) {
        let coupon = {
            discount: req.body.discount,
            name: req.body.name,
            amount: req.body.amount,
            start_date: req.body.start_date,
            end_date: req.body.end_date
        };

        res.send(await couponService.EditById(req.params.id, coupon));
    }

    async DeleteById(req, res) {
        await couponService.DeleteById(req.params.id);
        res.send('Ok');
    }
}
module.exports = new CouponsController()