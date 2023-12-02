const mongoose = require('mongoose');
const { Schema } = mongoose;

const agendamentoSchema = new Schema({
  data: { type: Date, required: true },
  hora: { type: String, required: true },
  cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
  piercing: { type: Schema.Types.ObjectId, ref: 'Piercing' },
  tipo: { type: String, required: true },
});

const profissionalSchema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefone: { type: String, required: true, unique: true },
    endereco: { type: String, required: true },
    servicos: { type: [String], required: true },
    agendamentos: [agendamentoSchema], 
    
  });
  
  const Profissional = mongoose.model("Profissional", profissionalSchema);

 module.exports = Profissional;