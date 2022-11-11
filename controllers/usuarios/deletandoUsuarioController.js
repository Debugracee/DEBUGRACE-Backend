const deletandoUsuarioController = async (req, res) => {
  let usuario = require("../../model/usuarios");
  const id = req.params.id;
  const usuarios = await usuario.findByPk(id);
  const usuarioExcluido = await usuarios.destroy({
    where: {
      id: id,
    },
  });

  try {
    return res.json({ usuarioExcluido: usuarioExcluido });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error" });
  }
};

module.exports = deletandoUsuarioController;
