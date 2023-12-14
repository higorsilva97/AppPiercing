const ServicoModel = require("../models/servicoModel");

class ServicoRepository {
  getAllServico() {
    return ServicoModel.find();
  }

  getServicoById(id) {
    return ServicoModel.findById(id);
  }

  createServico({ nome, descricao, preco, profissional }) {
    const servico = new ServicoModel({
      nome,
      descricao,
      preco,
      profissional
    });

    return servico.save();
  }

  updateServico(id, { nome, descricao, preco, profissional }) {
    return ServicoModel.findByIdAndUpdate(
      id,
      {
        nome,
        descricao,
        preco,
        profissional,
      },
      { new: true }
    );
  }

  deleteServico(id) {
    return ServicoModel.findByIdAndDelete(id);
  }


  getAllServicosByProfissional(profissionalId) {
    return ServicoModel.find({ profissional: profissionalId })
  }

}

module.exports = new ServicoRepository();
