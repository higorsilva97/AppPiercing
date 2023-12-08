const mongoose = require("mongoose");
const { Schema } = mongoose;

const profissionalSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String, required: true, unique: true },
  endereco: { type: String, required: true },
  servicos: { type: [String], required: true },
  piercings: [{ type: Schema.Types.ObjectId, ref: 'Piercing' }]
});

const Profissional = mongoose.model("Profissional", profissionalSchema);

module.exports = Profissional;
