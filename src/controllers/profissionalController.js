const profissionalService = require("../services/profissionalService");

class ProfissionalController {
  async createProfissional(req, res) {
    try {
      const novoProfissional = await profissionalService.createProfissional(
        req.body
      );
      res.status(201).json(novoProfissional);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  // Busca todos os profissionais
  async getAllProfissionais(req, res) {
    try {
      const profissionais = await profissionalService.getAllProfissionais();
      res.status(200).json(profissionais);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Busca profissionais por id
  async getProfissionalById(req, res) {
    try {
      const id = req.params.id;
      const profissional = await profissionalService.getProfissionalById(id);

      if (!profissional) {
        return res.status(404).json({ message: "Profissional não encontrado" });
      }

      res.status(200).json(profissional);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateProfissional(req, res) {
    try {
      const id = req.params.id;
      const profissional = await profissionalService.getProfissionalById(id);

      if (!profissional) {
        return res.status(404).json({ message: "Profissional não encontrado" });
      }

      const { nome, email, senha, telefone, servicos, piercings } = req.body;

      const profissionalAtualizado =
        await profissionalService.updateProfissional(id, {
          nome,
          email,
          senha,
          telefone,
          endereco,
          servicos,
          piercings,
        });

      res.status(200).json(profissionalAtualizado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteProfissional(req, res) {
    try {
      const id = req.params.id;
      const profissional = await profissionalService.getProfissionalById(id);

      if (!profissional) {
        return res.status(404).json({ message: "Profissional não encontrado" });
      }
      await profissionalService.deleteProfissional(id);

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ProfissionalController();
