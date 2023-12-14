const agendamentoModel = require("../models/agendamentoModel");

class AgendamentoRepository {
  getAllAgendamentos() {
    return agendamentoModel.find();
  }

  getAgendamentoById(id) {
    return agendamentoModel
      .findById(id)
      .populate("cliente profissional servico piercing");
  }

  createAgendamento({
    data,
    hora,
    cliente,
    profissional,
    piercing,
    servico,
    estudio,
  }) {
    const agendamento = new agendamentoModel({
      data,
      hora,
      cliente,
      profissional,
      piercing,
      servico,
      estudio,
    });
    return agendamento.save();
  }

  updateAgendamento(
    id,
    { data, hora, cliente, profissional, piercing, servico, estudio }
  ) {
    return agendamentoModel.findByIdAndUpdate(
      id,
      {
        data,
        hora,
        cliente,
        profissional,
        piercing,
        servico,
        estudio,
      },
      { new: true }
    );
  }

  deleteAgendamento(id) {
    return agendamentoModel.findByIdAndDelete(id);
  }
}

module.exports = new AgendamentoRepository();
