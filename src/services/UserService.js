
const userRepository = require('../repositories/UserRepository');
const roleRepository = require('../repositories/RoleRepository');

const crypt = require("../utils/Crypt");
const jwt = require('jwt-simple');

const UserConfig = require('../config/ModelsConfig.json');
const AuthConfig = require('../config/AuthConfig.json');

const ApiError = require('../error/ApiError')


class UserService {
    async GetAll() {
        return await userRepository.GetAll();
    }

    async GetById(userId) {
        let user = await userRepository.GetById(userId);

        if (!user) {
            throw new ApiError.badRequest("No such user");
        }

        return user;
    }


    async Register(user) {
        let role = UserConfig.Users.DefaultRole;

        user.password = await crypt.CryptPassword(user.password);
        user.role = role
        user = await userRepository.Create(user);


        return user;
    }

    async Login(user) {
        const password = user.password;
        user = await userRepository.GetOneByQuery({email: user.email});

        if (!user) {
            throw new ApiError.badRequest('No such user');
        }

        if (!crypt.ValidatePassword(password, user.password)) {
            throw new ApiError.unauthorized('Bad password')
        }

        let payload = {
            userId: user.id,
        }

        let token = jwt.encode(payload, AuthConfig.SecretKey);

        return { token: token };
    }

    async EditById(userId, user) {
        if (user) {
              if (user.password) {
                user.password = await crypt.CryptPassword(user.password);
            }
            await userRepository.EditById(userId, user);
        }

        return await userRepository.GetById(userId);
    }

    async DeleteById(userId) {
        await userRepository.DeleteById(userId);
    }
}

module.exports = new UserService();