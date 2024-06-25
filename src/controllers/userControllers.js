const Alunos = require('../db/universidade/alunos');

const user = {
  get: async (req, res) => {
    try {
      const response = await Alunos.findAll();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  post: async (req, res) => {
    try {
      const insert = await Alunos.create(req.body);
      return res.status(201).json(insert);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  edit: async (req, res) => {
    try {
      const response = await Alunos.findByPk(req.body.id);
      if (!response) {
        return res.status(404).json({ message: 'Registro não encontrado' });
      }
      response.name = req.body.name;
      await response.save();
      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteByID: async (req, res) => {
    const { id } = req.body;
    try {
      const response = await Alunos.findByPk(id);
      if (!response) {
        return res.status(404).json({ message: 'Registro não encontrado' });
      }
      response.destroy();
      return res.status(200).json({ message: 'Registro deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  
};
module.exports = user;
