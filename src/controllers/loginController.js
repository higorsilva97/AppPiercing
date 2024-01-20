const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const clienteService = require("../services/clienteService");
const profissionalService = require("../services/profissionalService");

class LoginController {
  async login(req, res) {
    const { email, senha, tipo } = req.body;

    if (!email || !senha || !tipo) {
      return res.status(400).json({ message: "Informe email, senha e tipo" });
    }

    try {
      let usuario;

      switch (tipo) {
        case "cliente":
          usuario = await clienteService.getClienteByEmail(email);
          break;
        case "profissional":
          usuario = await profissionalService.getProfissionalByEmail(email);
          break;
        default:
          return res.status(400).json({ message: "Tipo de usuário inválido" });
      }

      if (!usuario) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      if (!bcrypt.compareSync(senha, usuario.senha)) {
        return res.status(401).json({ message: "Credenciais inválidas" });
      }

      const token = jwt.sign(
        { id: usuario._id, email: usuario.email, tipo },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      const { senha: _, ...usuarioLogin } = usuario.toObject();

      return res.json({
        usuario: usuarioLogin,
        token
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro durante a autenticação", error: error.message });
    }
  }
}

module.exports = new LoginController();
