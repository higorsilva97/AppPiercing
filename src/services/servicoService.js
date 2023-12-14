const servicoRepository = require("../repositories/servicoRepository");

class ServicoService {
  async getAllServicos() {
    return servicoRepository.getAllServico();
  }

  async getServicoById(id) {
    return servicoRepository.getServicoById(id);
  }

  async updateServico(id, { nome, descricao, preco, profissional }) {
    return servicoRepository.updateServico(id, { nome, descricao, preco, profissional });
  }

  async createServico({ nome, descricao, preco, profissional }) {
    return servicoRepository.createServico({ nome, descricao, preco, profissional });
  }

  async deleteServico(id) {
    return servicoRepository.deleteServico(id);
  }
}


module.exports = new ServicoService();
