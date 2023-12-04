
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
const { Schema } = mongoose;


const app = express();
app.use(express.json());
const port = 3000;

app.use(routes.profissionalRoutes);

app.listen(port, () => {
  mongoose.connect(
    "mongodb+srv://higorsilva97:0ZZsxSXfAPeVquUn@app-piercing.pujzj0f.mongodb.net/?retryWrites=true&w=majority"
  );

    console.log("Servidor rodando...")
});
