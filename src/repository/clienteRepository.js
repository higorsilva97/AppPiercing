const ClienteModel = require("../models/clienteModel");

class ClienteRepository {
  getAllCliente() {
    return ClienteModel.find();
  }

  getClienteById(id) {
    return ClienteModel.findById(id);
  }

  createCliente({ nome, email, telefone, endereco }) {
    const cliente = new ClienteModel({
      nome,
      email,
      telefone,
      endereco,
    });

    return cliente.save();
  }

  updateCliente(id, { nome, email, telefone, endereco }) {
    return ClienteModel.findByIdAndUpdate(
      id,
      {
        nome,
        email,
        telefone,
        endereco,
      },
      { new: true }
    );
  }

  deleteCliente(id) {
    return ClienteModel.findByIdAndDelete(id);
  }
}

module.exports = new ClienteRepository();
