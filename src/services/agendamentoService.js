const agendamentoRepository = require("../repositories/agendamentoRepositoty");

class AgendamentoService {
  async createAgendamento({
    data,
    hora,
    cliente,
    profissional,
    piercing,
    servico,
    estudio,
  }) {

    const novoAgendamento = await agendamentoRepository.createAgendamento({
      data,
      hora,
      cliente,
      profissional,
      piercing,
      servico,
      estudio,
    });
    
    return novoAgendamento;
  }

  async getAllAgendamentos() {
    return agendamentoRepository.getAllAgendamentos();
  }

  async getAgendamentoById(id) {
    return agendamentoRepository.getAgendamentoById(id);
  }

  async updateAgendamento(id, { data, hora, cliente, profissional, piercing, servico, estudio }) {
    return agendamentoRepository.updateAgendamento(id, {
      data,
      hora,
      cliente,
      profissional,
      piercing,
      servico,
      estudio,
    });
  }

  async deleteAgendamento(id) {
    return agendamentoRepository.deleteAgendamento(id);
  }
}

module.exports = new AgendamentoService();
