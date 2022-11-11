const pegandoUsuarioController = async (req, res) => {
  let usuario = require("../../model/usuarios");
  const usuarios = await usuario.findAll();

  try {
    return res.status(201).json({ usuario: usuarios });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error" });
  }
};

module.exports = pegandoUsuarioController;
