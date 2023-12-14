
const agendamentoService = require("../services/agendamentoService");

class AgendamentoController {
  async createAgendamento(req, res) {
    try {
      const novoAgendamento = await agendamentoService.createAgendamento();

      res.status(201).json(novoAgendamento);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAllAgendamentos(req, res) {
    try {
      const agendamentos = await agendamentoService.getAllAgendamentos();
      res.status(200).json(agendamentos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAgendamentoById(req, res) {
    try {
      const id = req.params.id;
      const agendamento = await agendamentoService.getAgendamentoById(id);

      if (!agendamento) {
        return res.status(404).json({ message: "Agendamento não encontrado" });
      }

      res.status(200).json(agendamento);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateAgendamento(req, res) {
    try {
      const id = req.params.id;
      const agendamento = await agendamentoService.getAgendamentoById(id);

      if (!agendamento) {
        return res.status(404).json({ message: "Agendamento não encontrado" });
      }

      const { data, hora, cliente, profissional, piercing, servico, estudio } =
        req.body;

      await agendamentoService.updateAgendamento(id, {
        data,
        hora,
        cliente,
        profissional,
        piercing,
        servico,
        estudio,
      });

      res.status(200).json(agendamento);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteAgendamento(req, res) {
    try {
      const id = req.params.id;
      const agendamento = await agendamentoService.getAgendamentoById(id);

      if (!agendamento) {
        return res.status(404).json({ message: "Agendamento não encontrado" });
      }

      agendaService.deleteAgendamento(id);

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AgendamentoController();
