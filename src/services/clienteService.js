const ClienteRepository = require("../repository/clienteRepository");

class ClienteService {
  async createCliente({ nome, email, telefone, endereco }) {
    return ClienteRepository.createCliente({ nome, email, telefone, endereco });
  }

  async getAllCliente() {
    return ClienteRepository.getAllCliente();
  }

  async getClienteById(id) {
    return ClienteRepository.getClienteById(id);
  }

  async updateCliente(id, { nome, email, telefone, endereco }) {
    return ClienteRepository.updateCliente(id, { nome, email, telefone, endereco });
  }

  async deleteCliente(id) {
    return ClienteRepository.deleteCliente(id);
  }
}

module.exports = new ClienteService();
