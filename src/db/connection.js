const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'universidade',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
});

module.exports = pool;
