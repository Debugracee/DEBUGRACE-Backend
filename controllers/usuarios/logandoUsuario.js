const bcrypt = require("bcrypt");

const logandoUsuarioController = async (req, res) => {
  const usuario = require("../../model/usuarios");
  const { email, senha } = req.body;

  // if (!email) {
  //   return res.status(422).json({ erro: "É preciso de um email" });
  // }

  // if (!senha) {
  //   return res.status(422).json({ erro: "É preciso de uma senha" });
  // }

  const usuarioExistente = await usuario.findOne({ where: { email: email } });
  const buscarSenha = await bcrypt.compare(senha, usuarioExistente.senha);
  console.log(usuarioExistente.senha);
  console.log(senha);
  console.log(buscarSenha);

  // if (!usuarioExistente) {
  //   return res.status(404).json({ erro: "Este usuario não existe" });
  // }

  if (!buscarSenha) {
    return res.status(402).json({ erro: "Coloque uma senha válida" });
  }

  await usuario.update(
    {
      id: usuarioExistente.id,
      nome: usuarioExistente.nome,
      email: usuarioExistente.email,
      nascimento: usuarioExistente.nascimento,
      genero: usuarioExistente.genero,
      senha: usuarioExistente.senha,
      statusLogin: true,
    },
    { where: { id: usuarioExistente.id } }
  );

  const usuarioAtualizado = await usuario.findByPk(usuarioExistente.id);

  return res.status(201).json({ msg: "logado!", usuario: usuarioAtualizado });
};

module.exports = logandoUsuarioController;
