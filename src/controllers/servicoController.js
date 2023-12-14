const servicoService = require("../services/servicoService");

class ServicoController {
  async createServico(req, res) {
    try {
      const novoServico = req.body;
      const servicoCriado = await servicoService.createServico(novoServico);
      res.status(201).json(servicoCriado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAllServicos(req, res) {
    try {
      const servicos = await servicoService.getAllServicos();
      res.status(200).json(servicos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getServicoById(req, res) {
    try {
      const id = req.params.id;
      const servico = await servicoService.getServicoById(id);

      if (!servico) {
        return res.status(404).json({ message: "Serviço não encontrado" });
      }

      res.status(200).json(servico);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateServico(req, res) {
    try {
      const id = req.params.id;
      const servicoAtualizado = req.body;
      const servico = await servicoService.updateServico(id, servicoAtualizado);

      if (!servico) {
        return res.status(404).json({ message: "Serviço não encontrado" });
      }

      res.status(200).json(servico);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteServico(req, res) {
    try {
      const id = req.params.id;
      const servicoDeletado = await servicoService.deleteServico(id);

      if (!servicoDeletado) {
        return res.status(404).json({ message: "Serviço não encontrado" });
      }

      res.status(200).json({ message: "Serviço deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ServicoController();
