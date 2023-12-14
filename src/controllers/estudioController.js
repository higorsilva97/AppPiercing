const estudioService = require("../services/estudioService");

class EstudioController {
  async createEstudio(req, res) {
    try {
      const novoEstudio = await estudioService.createEstudio(req.body);
      res.status(201).json(novoEstudio);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAllEstudios(req, res) {
    try {
      const estudios = await estudioService.getAllEstudios();
      res.status(200).json(estudios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getEstudioById(req, res) {
    try {
      const id = req.params.id;
      const estudio = await estudioService.getEstudioById(id);

      if (!estudio) {
        return res.status(404).json({ message: "Estúdio não encontrado" });
      }

      res.status(200).json(estudio);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateEstudio(req, res) {
    try {
      const id = req.params.id;
      const estudio = await estudioService.getEstudioById(id);

      if (!estudio) {
        return res.status(404).json({ message: "Estúdio não encontrado" });
      }

      const { nome, endereco, telefone } = req.body;
      const estudioAtualizado = await estudioService.updateEstudio(id, {
        nome,
        endereco,
        telefone,
      });

      res.status(200).json(estudioAtualizado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteEstudio(req, res) {
    try {
      const id = req.params.id;
      const estudio = await estudioService.getEstudioById(id);

      if (!estudio) {
        return res.status(404).json({ message: "Estúdio não encontrado" });
      }
      estudioService.deleteEstudio(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new EstudioController();
