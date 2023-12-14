const estudioRepository = require("../repositories/estudioRepository");

class EstudioService {
  async getAllEstudios() {
    return estudioRepository.getAllEstudios();
  }

  async getEstudioById(id) {
    return estudioRepository.getEstudioById(id);
  }

  async createEstudio({ nome, telefone, endereco, profissionais }) {
    return estudioRepository.createEstudio({ nome, telefone, endereco, profissionais });
  }

  async updateEstudio(id, { nome, telefone, endereco, profissionais }) {
    return estudioRepository.updateEstudio(id, { nome, telefone, endereco, profissionais });
  }

  async deleteEstudio(id) {
    return estudioRepository.deleteEstudio(id);
  }
}

module.exports = new EstudioService();
