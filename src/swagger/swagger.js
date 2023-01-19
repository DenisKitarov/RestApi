const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

const doc = {
    info: {
        version: '1.0.0',      // by default: '1.0.0'
        title: 'Coupons API',        // by default: 'REST API'
        description: 'Web application for coupons operation',  // by default: ''
    },
    host: '',      // by default: 'localhost:3000' -- NO! by default empty (but used current host)!
    basePath: '',  // by default: '/'
    schemes: [],   // by default: ['http']
    consumes: [],  // by default: ['application/json']
    produces: [],  // by default: ['application/json']
    tags: [        // by default: empty Array
        {
            name: 'User',         // Tag name
            description: 'User API',  // Tag description
        },
        {
            name: 'Coupons',         // Tag name
            description: 'Coupons API',  // Tag description
        },
        {
            name: 'Reviews',         // Tag name
            description: 'Reviews API',  // Tag description
        },
        {
            name: 'Role',         // Tag name
            description: 'Role API',  // Tag description
        }
        // { ... }
    ],
    securityDefinitions: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    },  // by default: empty object (Swagger 2.0)
    definitions: {},          // by default: empty object
    components: {}            // by default: empty object (OpenAPI 3.x)
};


const outputFile = 'swagger/swagger.json';
const endpointsFiles = ['loader/Routing.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then(r => console.log(r));