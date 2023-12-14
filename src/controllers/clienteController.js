const clienteService = require("../services/clienteService");

class ClienteController {
  async createCliente(req, res) {
    try {
      const novoCliente = await clienteService.createCliente(req.body);
      res.status(201).json(novoCliente);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAllClientes(req, res) {
    try {
      const clientes = await clienteService.getAllClientes();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getClienteById(req, res) {
    try {
      const id = req.params.id;
      const cliente = await clienteService.getClienteById(id);
      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateCliente(req, res) {
    try {
      const id = req.params.id;
      const cliente = await clienteService.getClienteById(id);

      if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado" });
      }

      const { nome, email, telefone, endereco } = req.body;

      const clienteAtualizado = await clienteService.updateCliente(id, {
        nome,
        email,
        telefone,
        endereco,
      });

      res.status(200).json(clienteAtualizado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteCliente(req, res) {
    try {
      const id = req.params.id;
      const cliente = await clienteService.getClienteById(id);

      if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado" });
      }

      await clienteService.deleteCliente(id);

      res.status(204).send(); // Como você está excluindo, uma resposta sem conteúdo é apropriada
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ClienteController();
