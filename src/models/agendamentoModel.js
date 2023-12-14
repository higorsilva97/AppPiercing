const mongoose = require('mongoose');
const { Schema } = mongoose;

const agendamentoSchema = new Schema({
  data: { type: Date, required: true },
  hora: { type: String, required: true },
  cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
  profissional: { type: Schema.Types.ObjectId, ref: 'Profissional' },
  piercing: { type: Schema.Types.ObjectId, ref: 'Piercing' },
  servico: { type: Schema.Types.ObjectId, ref: 'Servico' },
  estudio: { type: Schema.Types.ObjectId, ref: 'Estudio' },
  
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;
