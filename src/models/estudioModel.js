const mongoose = require("mongoose");
const { Schema } = mongoose;

const estudioSchema = new Schema({
  nome: { type: String, required: true },
  telefone:{ type: String, required: true },
  endereco: { type: String, required: true },
  profissionais: [{ type: Schema.Types.ObjectId, ref: "Profissional" }],
});

const Estudio = mongoose.model("Estudio", estudioSchema);

module.exports = Estudio;
