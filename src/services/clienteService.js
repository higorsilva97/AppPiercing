const clienteRepository = require("../repositories/clienteRepository")

class ClienteService {
  async createCliente({ nome, email, senha, telefone, endereco, agendamentos }) {
    return clienteRepository.createCliente({
      nome,
      email,
      senha,
      telefone,
      endereco,
      agendamentos
    });
  }

  async getAllClientes() {
    return clienteRepository.getAllCliente();
  }

  async getClienteById(id) {
    return clienteRepository.getClienteById(id);
  }

  async updateCliente(id, { nome, email, senha, telefone, endereco,agendamentos }) {
    return clienteRepository.updateCliente(id, {
      nome,
      email,
      senha,
      telefone,
      endereco,
      agendamentos
    });
  }

  async deleteCliente(id) {
    return clienteRepository.deleteCliente(id);
  }
}

module.exports = new ClienteService();
