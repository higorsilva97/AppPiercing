const piercingService = require("../services/piercingService");

class PiercingController {
  async getAllPiercings(req, res) {
    try {
      const piercings = await piercingService.getAllPiercings();
      res.status(200).json(piercings);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getPiercingById(req, res) {
    try {
      const id = req.params.id;
      const piercing = await piercingService.getPiercingById(id);

      if (!piercing) {
        return res.status(404).json({ message: "Piercing não encontrado" });
      }

      res.status(200).json(piercing);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createPiercing(req, res) {
    try {
      const novoPiercing = await piercingService.createPiercing(req.body);
      res.status(201).json(novoPiercing);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updatePiercing(req, res) {
    try {
      const id = req.params.id;
      const piercing = await piercingService.getPiercingById(id);

      if (!piercing) {
        return res.status(404).json({ message: "Piercing não encontrado" });
      }

      const { nome, descricao, preco, tempo } = req.body;

      const piercingAtualizado = await piercingService.updatePiercing(id, {
        nome,
        descricao,
        preco,
        tempo,
      });

      res.status(200).json(piercingAtualizado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deletePiercing(req, res) {
    try {
      const id = req.params.id;
      const piercing = await piercingService.getPiercingById(id);
      if (!piercing) {
        return res.status(404).json({ message: "Piercing não encontrado" });
      }

      await piercingService.deletePiercing(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PiercingController();
