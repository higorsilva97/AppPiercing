const EstudioModel = require("../models/estudioModel");

class EstudioController {
  async create(req, res) {
    try {
      const estudio = new EstudioModel({
        nome: req.body.nome,
        profissionais: req.body.profissionais
      });

      const novoEstudio = await estudio.save();
      res.status(201).json(novoEstudio);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const estudios = await EstudioModel.find().populate("piercings");
      res.status(200).json(estudios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      const estudio = await EstudioModel.findById(id).populate("profissional");

      if (!estudio) {
        return res.status(404).json({ message: "Estúdio não encontrado" });
      }

      res.status(200).json(estudio);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { nome, profissionais } = req.body;

      let estudio = await EstudioModel.findById(req.params.id);

      if (!estudio) {
        return res.status(404).json({ message: "Estúdio não encontrado" });
      }

      estudio.nome = nome || estudio.nome;
      estudio.profissionais = nome || estudio.profissionais;

      await estudio.save();

      res.status(200).json(estudio);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const estudio = await EstudioModel.findByIdAndDelete(req.params.id);

      if (!estudio) {
        return res.status(404).json({ message: "Estúdio não encontrado" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new EstudioController();
