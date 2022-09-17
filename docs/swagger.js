const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de mi API",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      pelicula: {
        type: "object",
        required: ["nombre", "sipnosis", "genero", "duracion"],
        properties: {
          nombre: {
            type: "string",
          },
          sipnosis: {
            type: "string",
          },
          genero: {
            type: "string",
          },
          duracion: {
            type: "number",
          },
        },
      },
    },
  },
};

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./routes/*.route.js"],
};

module.exports = swaggerJSDoc(swaggerOptions);
