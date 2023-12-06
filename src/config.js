const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");


function configureApp() {
  const app = express();
  app.use(express.json());
  return app;
}

function connectToDatabase() {
  mongoose.connect(
    "mongodb+srv://higorsilva97:0ZZsxSXfAPeVquUn@app-piercing.pujzj0f.mongodb.net/?retryWrites=true&w=majority"
  );
}

module.exports = { configureApp, connectToDatabase};
