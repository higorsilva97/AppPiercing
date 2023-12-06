const Profissional = require("../models/profissionalModel");


class ProfissionalController {
  //create
  async create(req, res) {
    try {
      const profissional = new Profissional({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        servicos: req.body.servicos,
        agendamentos: req.body.agendamentos,
      });

      const novoProfissional = await profissional.save();
      res.status(201).json(novoProfissional);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Busca todos os profissionais
  async getAll(req, res) {
    try {
      const profissionais = await Profissional.find();
      res.status(200).json(profissionais);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Busca profissionais por id
  async getById(req, res) {
    try {
      const id = req.params.id;
      const profissional = await Profissional.findById(id);

      if (!profissional) {
        return res.status(404).json({ message: "Profissional não encontrado" });
      }

      res.status(200).json(profissional);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const nome = req.body.nome;
      const email = req.body.email;
      const telefone = req.body.telefone;
      const endereco = req.body.endereco;
      const servicos = req.body.servicos;
      const agendamentos = req.body.agendamentos;

      let profissional = await Profissional.findById(req.params.id);

      if (!profissional) {
        return res.status(404).json({ message: "Profissional não encontrado" });
      }

      profissional.nome = nome || profissional.nome;
      profissional.email = email || profissional.email;
      profissional.telefone = telefone || profissional.telefone;
      profissional.endereco = endereco || profissional.endereco;
      profissional.servicos = servicos || profissional.servicos;
      profissional.agendamentos = agendamentos || profissional.agendamentos;


      await profissional.save();

      res.status(200).json(profissional);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const profissional = await Profissional.findByIdAndDelete(req.params.id);
  
      if (!profissional) {
        return res.status(404).json({ message: "Profissional não encontrado" });
      }
  
     
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
}

module.exports = new ProfissionalController();
