const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');


const clienteSchema = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    telefone: {type:String, required: true},
    endereco: {type: String, required: true},
    agendamentos: [{ type: Schema.Types.ObjectId, ref: 'Agendamento' }]
});

clienteSchema.pre('save', async function(next) {
    if(this.isModified('senha')) {
        const hashedSenha =  await bcrypt.hash(this.senha, 8);
        this.senha = hashedSenha;
    }
    next();
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;

