const EstudioModel = require("../models/estudioModel");

class EstudioRepository {
  getAllEstudios() {
    return EstudioModel.find();
  }

  getEstudioById(id) {
    return EstudioModel.findById(id).populate('profissionais'); // Popula os profissionais associados ao estúdio
  }

  createEstudio({ nome, telefone, endereco, profissionais }) {
    const estudio = new EstudioModel({
      nome,
      telefone,
      endereco,
      profissionais,
    });

    return estudio.save();
  }

  updateEstudio(id, { nome, telefone, endereco, profissionais }) {
    return EstudioModel.findByIdAndUpdate(
      id,
      {
        nome,
        telefone,
        endereco,
        profissionais,
      },
      { new: true }
    );
  }

  deleteEstudio(id) {
    return EstudioModel.findByIdAndDelete(id);
  }
}

module.exports = new EstudioRepository();
