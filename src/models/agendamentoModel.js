const mongoose = require('mongoose');
const { Schema } = mongoose;

const agendamentoSchema = new Schema({
  data: { type: Date, required: true },
  hora: { type: String, required: true },
  cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
  piercing: { type: Schema.Types.ObjectId, ref: 'Piercing' },
  tipo: { type: String, required: true },
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;
