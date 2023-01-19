const Response = require ("../helpers/response.js");
const mongoLogger= require ("../helpers/mongoLogger.js");

 const errorHandler = function(error, req, res, next){

  error.route = req.path;

  mongoLogger.storeError(error);

  res.status(error.status || 500).json(new Response(error.message, error.status || 500));

};
module.exports=errorHandler