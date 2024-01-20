const ProfissionalModel = require("../models/profissionalModel");


class ProfissionalRepository {
  getAllProfissionais() {
    return ProfissionalModel.find();
  }

  getProfissionalById(id) {
    return ProfissionalModel.findById(id).populate("");  // .populate("piercings servicos"); 
  }

  getProfissionalByEmail(email) {
    return ProfissionalModel.findOne({ email });
  }

  createProfissional({ nome, email, senha, telefone, tipo, servicos, piercings }) {
    const profissional = new ProfissionalModel({
      nome,
      email,
      senha,
      telefone,
      tipo,
      servicos,
      piercings,
    });

    return profissional.save();
  }

  updateProfissional(
    id,
    { nome, email, senha, telefone, tipo, servicos, piercings }
  ) {
    return ProfissionalModel.findByIdAndUpdate(
      id,
      {
        nome,
        email,
        senha,
        telefone,
        tipo, 
        servicos,
        piercings,
      },
      { new: true }
    );
  }

  deleteProfissional(id) {
    return ProfissionalModel.findByIdAndDelete(id);
  }

  
}

module.exports = new ProfissionalRepository();
