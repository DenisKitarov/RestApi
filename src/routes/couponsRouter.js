const Router = require('express');
const { router } = require('../app');
const couponsRouter = new Router();

const validate = require('../middleware/Validate')
const couponsScheme = require('../schemes/CouponsScheme')

const couponsController = require('../controllers/couponsController')
const mongoLogger = require('../utils/MongoLogger')
const isAuthorize = require('../middleware/IsAuthorize');

couponsRouter.use(isAuthorize);
couponsRouter.use(mongoLogger.LogHttpEvent)
couponsRouter.get('/:id', couponsController.GetDetailedById
    /*
        #swagger.tags = ['Coupons']
        #swagger.security = [{ "bearerAuth": [] }]
        */);
couponsRouter.get('/', couponsController.GetAll
    /*
        #swagger.tags = ['Coupons']
        #swagger.security = [{ "bearerAuth": [] }]
        */);
couponsRouter.post('/', validate(couponsScheme.create), couponsController.CreateOne
    /*
        #swagger.tags = ['Coupons']
        #swagger.security = [{ "bearerAuth": [] }]
        */);
couponsRouter.put('/:id', validate(couponsScheme.edit), couponsController.EditById
    /*
        #swagger.tags = ['Coupons']
        #swagger.security = [{ "bearerAuth": [] }]
        */);
couponsRouter.delete('/:id', couponsController.DeleteById
    /*
        #swagger.tags = ['Coupons']
        #swagger.security = [{ "bearerAuth": [] }]
        */);

module.exports = couponsRouter

// couponsRouter.get('/coupons')
// couponsRouter.post('/coupons')
// couponsRouter.put('/coupons/:id')
// couponsRouter.delete('/coupons/:id')
// couponsRouter.get('/coupons/:id')
// module.exports = couponsRouter