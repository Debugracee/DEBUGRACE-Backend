const statusLogadoController = async (req, res) => {
  const usuario = require("../../model/usuarios");
  const { email } = req.body;
  const result = await usuario.findOne({ where: { email } });
  try {
    return res.json({ statusLogado: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error" });
  }
};

module.exports = statusLogadoController;
