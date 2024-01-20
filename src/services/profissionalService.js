const profissionalRepository = require('../repositories/profissionalRepository');

class ProfissionalService {
    async getAllProfissionais() {
        try {
            const profissionais = await profissionalRepository.getAllProfissionais();
            return profissionais;
        } catch (error) {
            throw new Error('Failed to get profissionais');
        }
    }

    async getProfissionalById(id) {
        try {
            const profissional = await profissionalRepository.getProfissionalById(id);
            return profissional;
        } catch (error) {
            throw new Error('Failed to get profissional');
        }
    }

    async getProfissionalByEmail(email) {
        try {
            const profissional = await profissionalRepository.getProfissionalByEmail(email);
            return profissional;
        } catch (error) {
            throw new Error('Failed to get profissional');
        }
    }

    async createProfissional(profissionalData) {
        try {
            const createdProfissional = await profissionalRepository.createdProfissional(profissionalData);
            return createdProfissional;
        } catch (error) {
            throw new Error('Failed to create profissional');
        }
    }

    async updateProfissional(id, profissionalData) {
        try {
            const updatedProfissional = await profissionalRepository.updateProfissional(id, profissionalData);
            return updatedProfissional;
        } catch (error) {
            throw new Error('Failed to update profissional');
        }
    }

    async deleteProfissional(id) {
        try {
            await profissionalRepository.deleteProfissional(id);
        } catch (error) {
            throw new Error('Failed to delete profissional');
        }
    }
}

module.exports = new ProfissionalService();
