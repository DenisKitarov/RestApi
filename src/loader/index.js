const swaggerUI = require("swagger-ui-express");
const Router = require("express");
const router = Router();
const Express = require('./Express');
const models = require('../database/Database')


const Routing = require("./Routing");
const ErrorHandler = require("../middleware/ErrorHandlingMiddleware");
const Swagger = require("./Swagger");


router.use("/api", swaggerUI.serve, Swagger);

router.use(Express);
router.use(Routing);
router.use(ErrorHandler);

module.exports = router;