const clienteModel = require("../models/clienteModel");

class ClienteRepository {
  getAllCliente() {
    return clienteModel.find();
  }

  getClienteById(id) {
    return clienteModel.findById(id).populate("agendamentos");
  }

  getClienteByEmail(email) {
    return clienteModel.findOne({ email });
  }

  createCliente({ nome, email, senha, telefone, endereco, tipo,  agendamentos }) {

    const cliente = new clienteModel({
      nome,
      email,
      senha,
      telefone,
      endereco,
      tipo,
      agendamentos,
    });

    return cliente.save();
  }

  updateCliente(id, { nome, email, senha, telefone, endereco, tipo, agendamentos }) {
    return clienteModel.findByIdAndUpdate(
      id,
      {
        nome,
        email,
        senha,
        telefone,
        endereco,
        tipo, 
        agendamentos,
      },
      { new: true }
    );
  }

  deleteCliente(id) {
    return clienteModel.findByIdAndDelete(id);
  }
}

module.exports = new ClienteRepository();
