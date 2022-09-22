const statusLogadoController = async (req, res) => {
  const usuario = require("../../model/usuarios");
  const { email } = req.body;
  const result = await usuario.findOne({ where: { email } });
  return res.json({statusLogado: result})
};

module.exports = statusLogadoController
