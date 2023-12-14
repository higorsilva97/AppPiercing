const mongoose = require("mongoose");
const { Schema } = mongoose;

const servicoSchema = new Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  profissional: [{ type: Schema.Types.ObjectId, ref: 'profissional' }]
});

const Servico = mongoose.model("Servico", servicoSchema);

module.exports = Servico;
