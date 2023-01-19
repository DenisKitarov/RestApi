const roleRepository = require('../repositories/RoleRepository');

class RoleService {
    async GetAll() {
        return await roleRepository.GetAll();
    }
    async GetById(roleId) {
        return await roleRepository.GetById(roleId);
    }

    async CreateOne(role) {
        role = await roleRepository.Create(role);
        return role;
    }

    async EditById(roleId, role) {
        return await roleRepository.EditById(roleId, role);
    }

    async DeleteById(roleId) {
        return await roleRepository.DeleteById(roleId);
    }
}

module.exports = new RoleService();