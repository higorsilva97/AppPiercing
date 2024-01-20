const piercingModel = require("../models/piercingModel");

class PiercingRepository {
  getAllPiercings() {
    return piercingModel.find();
  }
  getPiercingById(id) {
    return piercingModel.findById(id);
  }

  createPiercing({
    nome,
    descricao,
    preco,
    estoque,
    categoria,
    local,
    profissional,
  }) {
    const piercing = new piercingModel({
      nome,
      descricao,
      preco,
      estoque,
      categoria,
      local,
      profissional,
    });

    return piercing.save();
  }

  updatePiercing(
    id,
    { nome, descricao, preco, estoque, categoria, local, profissional }
  ) {
    return piercingModel.findByIdAndUpdate(
      id,
      {
        nome,
        descricao,
        preco,
        estoque,
        categoria,
        local,
        profissional,
      },
      { new: true }
    );
  }

  deletePiercing(id) {
    return piercingModel.findByIdAndDelete(id);
  }
}

module.exports = new PiercingRepository();
