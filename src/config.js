require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

function configureApp() {
  const app = express();
  app.use(express.json());
  return app;
}

function connectToDatabase() {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexão bem-sucedida com o MongoDB'))
    .catch(err => console.error('Erro ao conectar-se ao MongoDB', err));
}


module.exports = { configureApp, connectToDatabase};
