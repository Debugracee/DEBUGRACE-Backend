require("dotenv/config");
const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("sequelize");
const usuarioRoute = require("../routers/usuario.routes");
const trilhasRoutes = require("../routers/trilhas.routes");
const port = 3500;

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});
app.use(express.json());
app.use(usuarioRoute);
app.use(trilhasRoutes);

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});
