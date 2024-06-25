const pool = require('../db/connection');

const user = {
  get: async (req, res) => {
    try {
      const response = await pool.query(`select * from alunos`);
      return res.status(200).json(response.rows);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  post: async (req, res) => {
    const { nome, email, telefone, endereco, cep, registro_academico } = req.body;
    try {
      const paramns = [nome, email, telefone, endereco, cep, registro_academico];
      const query = 'INSERT INTO alunos (nome, email, telefone, endereco, cep, registro_academico) VALUES($1,$2,$3,$4,$5,$6) RETURNING *';
      const insert = await pool.query(query, paramns);
      return res.status(201).json(insert.rows[0]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  edit: async (req, res) => {
    const { id_aluno, nome, email, telefone, endereco, cep, registro_academico } = req.body;
    const query = `UPDATE alunos SET nome='${nome}', telefone='${telefone}', endereco='${endereco}' WHERE id_aluno=${id_aluno} RETURNING *`;
    try {
      const response = await pool.query(query);
      if (response.rowCount === 0) {
        return res.status(404).json({ message: 'Registro não encontrado' });
      }
      return res.status(200).json(response.rows[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteByID: async (req, res) => {
    const { id_aluno } = req.body;
    try {
      const response = await pool.query(`delete from alunos where id_aluno = $1'`, [id_aluno]);
      if (response.rowCount === 0) {
        return res.status(404).json({ message: 'Registro não encontrado' });
      }
      return res.status(204).json({ message: 'Registro deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  deleteEmail: async (req, res) => {
    const { email } = req.body;
    try {
      const response = await pool.query(`DELETE FROM alunos WHERE email = $1`, [email]);
      if (response.rowCount === 0) {
        return res.status(404).json({ message: 'Registro não encontrado' });
      }
      return res.status(204).json({ message: 'Registro deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
module.exports = user;
