const userService = require('../services/UserService');
const UserConfig = require('../config/ModelsConfig.json');


class UserController {
    async GetAll(req, res) {
        res.send(await userService.GetAll());
    }
    async GetById(req, res) {
        res.send(await userService.GetById(req.params.id))
    }

    async EditById(req, res) {
        let userId = req.params.id;

        let user = {
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.phone,
            city: req.body.city
        };


        res.send(await userService.EditById(userId, user));
    }

    async DeleteById(req, res) {
        await userService.DeleteById(req.params.id);
        res.send('Ok');
    }

    async Register(req, res) {
        let user = {
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.phone,
            city: req.body.city
        };


        res.send(await userService.Register(user))
    }

    async Login(req, res) {
        let user = {
            email: req.body.email,
            password: req.body.password
        }

        res.send(await userService.Login(user));
    }
}

module.exports = new UserController();