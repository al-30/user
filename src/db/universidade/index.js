(async () => {
  const dataBase = require('../dataBase');
  const alunos = require('./alunos');
  await dataBase.sync();
})();
