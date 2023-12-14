const mongoose = require("mongoose");
const { Schema } = mongoose;

const piercingSchema = new Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  estoque: { type: Number, required: true },
  categoria: { type: String, required: true },
  local: { type: String, required: true },
  profissional: [{ type: Schema.Types.ObjectId, ref: 'profissional' }]
});

const Piercing = mongoose.model("Piercing", piercingSchema);

module.exports = Piercing;
