const deslogandoUsuario = async (req, res) => {
  const usuario = require("../../model/usuarios");
  const { email } = req.body;
  const usuarioLogado = await usuario.findOne({ where: { email: email } });
  await usuario.update(
    {
      id: usuarioLogado.id,
      nome: usuarioLogado.nome,
      email: usuarioLogado.email,
      nascimento: usuarioLogado.nascimento,
      genero: usuarioLogado.genero,
      senha: usuarioLogado.senha,
      statusLogin: false,
    },
    { where: { id: usuarioLogado.id } }
  );

  const usuarioAtualizado = await usuario.findByPk(usuarioLogado.id);

  return res
    .status(201)
    .json({ msg: "deslogado!", usuario: usuarioAtualizado });
};

module.exports = deslogandoUsuario;
