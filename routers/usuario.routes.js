const express = require("express");
const auth = require("../controllers/Middleware/auth");
const alterandoUsuarioController = require("../controllers/usuarios/alterandoUsuarioController");
const criandoUsuarioController = require("../controllers/usuarios/criandoUsuarioController");
const deletandoUsuarioController = require("../controllers/usuarios/deletandoUsuarioController");
const deslogandoUsuario = require("../controllers/usuarios/deslogandoUsuario");
const logandoUsuarioController = require("../controllers/usuarios/logandoUsuario");
const pegandoUsuarioController = require("../controllers/usuarios/pegandoUsuarioController");
const statusLogadoController = require("../controllers/usuarios/statusLogadoController");
const usuarioRoute = express.Router();

usuarioRoute.post("/usuario", criandoUsuarioController);

usuarioRoute.post('/status', statusLogadoController)

usuarioRoute.post("/login", logandoUsuarioController);

usuarioRoute.post("/deslog", deslogandoUsuario);

usuarioRoute.get("/usuario", pegandoUsuarioController);

usuarioRoute.put("/usuario/:id", auth, alterandoUsuarioController);

usuarioRoute.delete("/usuario/:id", deletandoUsuarioController);

module.exports = usuarioRoute;
