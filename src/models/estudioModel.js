const mongoose = require('mongoose');
const { Schema } = mongoose;

const estudioSchema = new Schema({
    nome: { type: String, required: true },
  id: { type: Number, required: true, unique: true }, 
  piercings: [{ type: Schema.Types.ObjectId, ref: 'Piercing' }]
})

const Estudio = mongoose.model('Estudio', estudioSchema);

module.exports = Estudio;