// agendamentoController.js
const AgendamentoModel = require("../models/agendamentoModel");

class AgendamentoController {
  async create(req, res) {
    try {
      const agendamento = new AgendamentoModel({
        data: req.body.data,
        hora: req.body.hora,
        cliente: req.body.cliente,
        piercing: req.body.piercing,
        tipo: req.body.tipo,
      });

      const novoAgendamento = await agendamento.save();
      res.status(201).json(novoAgendamento);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const agendamentos = await AgendamentoModel.find();
      res.status(200).json(agendamentos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      const agendamento = await AgendamentoModel.findById(id);

      if (!agendamento) {
        return res.status(404).json({ message: "Agendamento não encontrado" });
      }

      res.status(200).json(agendamento);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { data, hora, cliente, piercing, tipo } = req.body;

      let agendamento = await AgendamentoModel.findById(req.params.id);

      if (!agendamento) {
        return res.status(404).json({ message: "Agendamento não encontrado" });
      }

      agendamento.data = data || agendamento.data;
      agendamento.hora = hora || agendamento.hora;
      agendamento.cliente = cliente || agendamento.cliente;
      agendamento.piercing = piercing || agendamento.piercing;
      agendamento.tipo = tipo || agendamento.tipo;

      await agendamento.save();

      res.status(200).json(agendamento);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const agendamento = await AgendamentoModel.findByIdAndDelete(req.params.id);

      if (!agendamento) {
        return res.status(404).json({ message: "Agendamento não encontrado" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AgendamentoController();
