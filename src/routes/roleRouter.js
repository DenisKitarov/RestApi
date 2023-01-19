const Router = require('express');
const roleRouter = new Router();
const roleController = require('../controllers/roleController')
const roleScheme = require('../schemes/RoleScheme')
const validate = require('../middleware/Validate')
const isAuthorize = require('../middleware/IsAuthorize')
const mongoLogger = require("../utils/MongoLogger");

roleRouter.use(isAuthorize)
roleRouter.use(mongoLogger.LogHttpEvent)
roleRouter.get('/:id', roleController.GetById
    /*
            #swagger.tags = ['Role']
            #swagger.security = [{ "bearerAuth": [] }]
            */);
roleRouter.get('/', roleController.GetAll
    /*
                #swagger.tags = ['Role']
                #swagger.security = [{ "bearerAuth": [] }]
                */);
roleRouter.post('/', validate(roleScheme.create), roleController.Create
    /*
                #swagger.tags = ['Role']
                #swagger.security = [{ "bearerAuth": [] }]
                */);
roleRouter.put('/:id', validate(roleScheme.edit), roleController.EditById
    /*
                #swagger.tags = ['Role']
                #swagger.security = [{ "bearerAuth": [] }]
                */);
roleRouter.delete('/:id', roleController.DeleteById
    /*
                #swagger.tags = ['Role']
                #swagger.security = [{ "bearerAuth": [] }]
                */);

module.exports = roleRouter