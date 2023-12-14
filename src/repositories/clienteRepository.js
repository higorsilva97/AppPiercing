const clienteModel = require("../models/clienteModel");

class ClienteRepository {
  getAllCliente() {
    return clienteModel.find();
  }

  getClienteById(id) {
    return clienteModel.findById(id).populate("agendamentos");
  }

  createCliente({ nome, email, senha, telefone, endereco, agendamentos }) {
    const cliente = new clienteModel({
      nome,
      email,
      senha,
      telefone,
      endereco,
      agendamentos,
    });

    return cliente.save();
  }

  updateCliente(id, { nome, email, senha, telefone, endereco, agendamentos }) {
    return clienteModel.findByIdAndUpdate(
      id,
      {
        nome,
        email,
        senha,
        telefone,
        endereco,
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
