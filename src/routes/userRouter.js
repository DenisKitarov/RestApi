const Router = require('express');
const userRouter = new Router();
const userController = require('../controllers/userController')
const userScheme = require('../schemes/UserScheme')
const validate = require('../middleware/Validate')
const isAuthorize = require('../middleware/IsAuthorize')
const mongoLogger = require('../utils/MongoLogger')


userRouter.post("/login", userController.Login
    /*
        #swagger.tags = ['User']
                */);
userRouter.post("/register", userController.Register
    /*
            #swagger.tags = ['User']
                    */);

userRouter.use(isAuthorize)
userRouter.use(mongoLogger.LogHttpEvent)
userRouter.get("/", userController.GetAll
    /*
                #swagger.tags = ['User']
                #swagger.security = [{ "bearerAuth": [] }]
                */);
userRouter.get("/:id", userController.GetById
    /*
                    #swagger.tags = ['User']
                    #swagger.security = [{ "bearerAuth": [] }]
                    */);
userRouter.put('/:id', validate(userScheme.edit), userController.EditById
    /*
                    #swagger.tags = ['User']
                    #swagger.security = [{ "bearerAuth": [] }]
                    */);
userRouter.delete("/:id", userController.DeleteById
    /*
                    #swagger.tags = ['User']
                    #swagger.security = [{ "bearerAuth": [] }]
                    */);

module.exports = userRouter