const clienteRepository = require("../repositories/clienteRepository")

class ClienteService {
  async createCliente({ nome, email, senha, telefone, endereco, tipo, agendamentos }) {

    return clienteRepository.createCliente({
      nome,
      email,
      senha,
      telefone,
      endereco,
      tipo,
      agendamentos
    });
  }

  async getAllClientes() {
    return clienteRepository.getAllCliente();
  }

  async getClienteById(id) {
    return clienteRepository.getClienteById(id);
  }

  async getClienteByEmail(email) {
    return clienteRepository.getClienteByEmail(email);
  }

  async updateCliente(id, { nome, email, senha, telefone, endereco, tipo, agendamentos }) {
    return clienteRepository.updateCliente(id, {
      nome,
      email,
      senha,
      telefone,
      endereco,
      tipo, 
      agendamentos
    });
  }

  async deleteCliente(id) {
    return clienteRepository.deleteCliente(id);
  }
}

module.exports = new ClienteService();
