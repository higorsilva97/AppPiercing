const piercingRepository = require("../repositories/piercingRepository");

class PiercingService {
  async getAllPiercings() {
    return piercingRepository.getAllPiercings();
  }

  async getPiercingById(id) {
    return piercingRepository.getPiercingById(id);
  }

  async createPiercing(piercing) {
    return piercingRepository.createPiercing(piercing);
  }

  async updatePiercing(id, piercing) {
    return piercingRepository.updatePiercing(id, piercing);
  }

  async deletePiercing(id) {
    return piercingRepository.deletePiercing(id);
  }
}

module.exports = new PiercingService();
