const { configureApp, connectToDatabase } = require("./config");
const routes = require("./routes/index");

const app = configureApp();
const port = 3000;

connectToDatabase();

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
