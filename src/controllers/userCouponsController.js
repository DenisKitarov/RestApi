const {UserCoupons} = require("../models/UserCoupons");

class UserCouponsController{

    async GetAll(req, res) {
        res.send(await ticketService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await ticketService.GetDetailedById(req.params.id))
    }

    async Create(req, res) {
        let ticket = {
            seanceId: req.body.seanceId,
            placeId: req.body.placeId
        };

        res.send(await ticketService.Create(ticket));
    }

    async DeleteById(req, res) {
        await ticketService.DeleteById(req.params.id);
        res.send('Ok');
    }
}
module.exports = new UserCouponsController()