const mongoose = require('mongoose');
const { Schema } = mongoose;

const clienteSchema = new Schema({
    nome: {type: String, required: true},
    dataNascimento: {type: Date, required: true},
    email: {type: String, required: true, unique: true},
    telefone: {type:String, required: true},
    endereco: {type: String, required: true}
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;



