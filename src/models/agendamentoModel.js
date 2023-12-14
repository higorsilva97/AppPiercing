const mongoose = require('mongoose');
const { Schema } = mongoose;

const agendamentoSchema = new Schema({
  data: { type: Date, required: true },
  hora: { type: String, required: true },
  cliente: { type: Schema.Types.ObjectId, ref: 'cliente' },
  profissional: { type: Schema.Types.ObjectId, ref: 'profissional' },
  piercing: { type: Schema.Types.ObjectId, ref: 'piercing' },
  servico: { type: Schema.Types.ObjectId, ref: 'servico' },
  estudio: { type: Schema.Types.ObjectId, ref: 'estudio' },
  
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;
