require('dotenv').config();
const express = require('express');
const AppRoutes = require('./src/routes/index.routes');
const app = express();

app.use(express.json());
AppRoutes(app);
app.listen(3000, () => {
  console.log('Servidor online');
});
