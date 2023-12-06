const ClienteModel = require("../models/clienteModel");  // ver a boa pratica

class ClienteController {

  async create(req, res) {
    try {
      const cliente = new ClienteModel({
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
      });

      const novoCliente = await cliente.save();
      res.status(201).json(novoCliente);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const clientes = await ClienteModel.find();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      const cliente = await ClienteModel.findById(id);

      if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado" });
      }

      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { nome, dataNascimento, email, telefone, endereco } = req.body;

      let cliente = await ClienteModel.findById(req.params.id);

      if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado" });
      }

      cliente.nome = nome || cliente.nome;
      cliente.dataNascimento = dataNascimento || cliente.dataNascimento;
      cliente.email = email || cliente.email;
      cliente.telefone = telefone || cliente.telefone;
      cliente.endereco = endereco || cliente.endereco;

      await cliente.save();

      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const cliente = await ClienteModel.findByIdAndDelete(req.params.id);

      if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ClienteController();
