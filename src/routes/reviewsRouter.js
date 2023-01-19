const Router = require('express');
const reviewsRouter = new Router();
const validate = require('../middleware/Validate');
const reviewScheme = require('../schemes/ReviewsScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const reviewController = require('../controllers/reviewsController');
const mongoLogger = require("../utils/MongoLogger");

reviewsRouter.use(isAuthorize);
reviewsRouter.use(mongoLogger.LogHttpEvent);
reviewsRouter.get('/:id', reviewController.GetDetailedById
    /*
        #swagger.tags = ['Reviews']
        #swagger.security = [{ "bearerAuth": [] }]
        */);
reviewsRouter.get('/', reviewController.GetAll
    /*
            #swagger.tags = ['Reviews']
            #swagger.security = [{ "bearerAuth": [] }]
            */);
reviewsRouter.post('/', reviewController.Create
    /*
            #swagger.tags = ['Reviews']
            #swagger.security = [{ "bearerAuth": [] }]
            */);
reviewsRouter.delete('/:id', reviewController.DeleteById
    /*
            #swagger.tags = ['Reviews']
            #swagger.security = [{ "bearerAuth": [] }]
            */);

module.exports = reviewsRouter