const Sequelize = require('sequelize');
const dataBase = require('../dataBase.js');

const Alunos = dataBase.define('alunos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
});

module.exports = Alunos;
