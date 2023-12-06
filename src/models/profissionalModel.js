const mongoose = require("mongoose");
const { Schema } = mongoose;
const Agendamento = require("./agendamentoModel");

const profissionalSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String, required: true, unique: true },
  endereco: { type: String, required: true },
  servicos: { type: [String], required: true },
  agendamentos: [Agendamento.schema],
});

const Profissional = mongoose.model("Profissional", profissionalSchema);

module.exports = Profissional;
