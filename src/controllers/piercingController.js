const piercingModel = require("../models/piercingModel");

class PiercingController {
  async create(req, res) {
    try {
      const piercing = new piercingModel({
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        quantidade: req.body.estoque,
      });

      const novoPiercing = await piercing.save();
      res.status(201).json(novoPiercing);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const piercings = await piercingModel.find();
      res.status(200).json(piercings);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      const piercing = await piercingModel.findById(id);

      if (!piercing) {
        return res.status(404).json({ message: "Piercing não encontrado" });
      }

      res.status(200).json(piercing);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { nome, descricao, preco, estoquq } = req.body;

      let piercing = await piercingModel.findById(req.params.id);

      if (!piercing) {
        return res.status(404).json({ message: "Piercing não encontrado" });
      }

      piercing.nome = nome || piercing.nome;
      piercing.descricao = descricao || piercing.descricao;
      piercing.preco = preco || piercing.preco;
      piercing.estoque = estoque || piercing.estoque;

      await piercing.save();

      res.status(200).json(piercing);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const piercing = await piercingModel.findByIdAndDelete(req.params.id);

      if (!piercing) {
        return res.status(404).json({ message: "Piercing não encontrado" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PiercingController();
