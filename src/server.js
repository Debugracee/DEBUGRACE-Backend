require("dotenv/config");
const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("sequelize");
const usuarioRoute = require("../routers/usuario.routes");
const postsRoute = require("../routers/posts.routes");
const port = 3500;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", 'Content-Type,Authorization');
  app.use(cors());
  next();
});
app.use(express.json());
app.use(usuarioRoute);
app.use(postsRoute);


app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});
