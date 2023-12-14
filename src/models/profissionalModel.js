const mongoose = require("mongoose");
const { Schema } = mongoose;

const profissionalSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  servicos: [{ type: Schema.Types.ObjectId, ref: 'servicos' }],
  piercings: [{ type: Schema.Types.ObjectId, ref: 'piercing' }]
});

const Profissional = mongoose.model("Profissional", profissionalSchema);

module.exports = Profissional;
