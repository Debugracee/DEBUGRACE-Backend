const pegandoUsuarioController = async(req, res) => {
    let usuario = require("../../model/usuarios");
    const usuarios = await usuario.findAll();
    return res.status(201).json({usuario: usuarios})
};

module.exports = pegandoUsuarioController;