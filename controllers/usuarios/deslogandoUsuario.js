
// eu posso mudar o token do usuario por aqui
// posso mudar o tempo para 0 segundos ou menos talvez, ai o token some, nao sei
const deslogandoUsuario = async (req, res) => {
  const usuario = require("../../model/usuarios");
  const { email } = req.body;
  const usuarioLogado = await usuario.findOne({ where: { email: email } });

    await usuario.update(
      {
        id: usuarioLogado.id,
        nome: usuarioLogado.nome,
        email: usuarioLogado.email,
        senha: usuarioLogado.senha,
        statusLogin: false
      },
      { where: { id: usuarioLogado.id } }
    );

  // se tiver token o usuario continua com os mesmos dados, se nao tiver vai fazer o usuario.update

  const usuarioAtualizado = await usuario.findByPk(usuarioLogado.id);

  return res
    .status(201)
    .json({ msg: "deslogado!", usuario: usuarioAtualizado });
};

module.exports = deslogandoUsuario;
