const { configureApp, connectToDatabase } = require("./config");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../src/utils/swagger');
const routes = require("./routes/index");

const app = configureApp();
const port = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


connectToDatabase();

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
