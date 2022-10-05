const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const logandoUsuarioController = async (req, res) => {
  const usuario = require("../../model/usuarios");
  const { email, senha } = req.body;

  if (!email) {
    return res.status(422).json({ erro: "É preciso de um email" });
  }

  if (!senha) {
    return res.status(422).json({ erro: "É preciso de uma senha" });
  }

  const usuarioExistente = await usuario.findOne({ where: { email: email } });
  if (!usuarioExistente) {
    return res.status(404).json({ erro: "Email ou senha estão incorretos" });
  }
  const buscarSenha = await bcrypt.compare(senha, usuarioExistente.senha);
  console.log(usuarioExistente.senha);
  console.log(senha);
  console.log(buscarSenha);
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
  try {
    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: usuarioAtualizado._id,
        expiresIn: '2h'
      },
      secret
    );

    return res.status(201).json({ msg: "logado!", usuario: usuarioAtualizado, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error" });
  }
};

module.exports = logandoUsuarioController;
