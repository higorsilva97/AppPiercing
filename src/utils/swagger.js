const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Agendamento de Serviços Bodypiercing",
      version: "0.1.0",
      description:
        "Essa é a documentação da API de agendamento de serviços de bodypiercing",
      contact: {
        name: "Higor Silva",
        email: "higorsilva97@gmail.com",
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
