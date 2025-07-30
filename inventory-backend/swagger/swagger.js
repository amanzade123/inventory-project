  const swaggerJSDoc = require('swagger-jsdoc');

  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Inventory Management API',
        version: '1.0.0',
        description: 'API documentation for the Inventory Management System',
      },
      servers: [
        {
          url: `http://localhost:${process.env.PORT || 8080}`,
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ['./routes/*.js'],
  };

  const swaggerSpec = swaggerJSDoc(options);
  module.exports = swaggerSpec;
