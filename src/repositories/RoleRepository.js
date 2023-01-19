const sequelize = require('../db');
const Role = require('../models/Role');
const Op = require('sequelize').Op;

class RoleRepository {
    async GetAll() {
        return await Role.findAll();
    }

    async GetById(roleId) {
        return await Role.findOne({
            where: {
                id: roleId
            }
        });

    }

    async Create(role) {
        return await sequelize.transaction(
            async (t) => {
                role = await Role.create(role, {transaction: t})
                return role;
            })
    }

    async EditById(roleId, role) {
        await Role.update(role, {
            where: {
                id: roleId
            }
        });

        return await this.GetById(roleId);
    }

    async DeleteById(roleId) {
        await Role.destroy({
            where: {
                id: roleId
            }
        });
    }
}

module.exports = new RoleRepository();