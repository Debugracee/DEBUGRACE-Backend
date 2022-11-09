const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const logandoUsuarioController = async (req, res) => {
  const usuario = require("../../model/usuarios");
  const { email, senha } = req.body;

  // se senha ou email for vazio aparece a mensagem "os campos nao podem estar vazios"
  if (!email || !senha) {
    return res.status(422).json({ erro: "Os campos não podem estar vazio" });
  }

  const usuarioExistente = await usuario.findOne({ where: { email: email } });
  if (!usuarioExistente) {
    return res.status(404).json({ erro: "Email ou senha está incorreto" });
  }
  const buscarSenha = await bcrypt.compare(senha, usuarioExistente.senha);
  console.log(usuarioExistente.senha);
  console.log(senha);
  console.log(buscarSenha);

  if (!buscarSenha) {
    return res.status(404).json({ erro: "Email ou senha está incorreto" });
  }

  await usuario.update(
    {
      id: usuarioExistente.id,
      nome: usuarioExistente.nome,
      email: usuarioExistente.email,
      senha: usuarioExistente.senha,
      statusLogin: true,
    },
    { where: { id: usuarioExistente.id } }
  );

  const usuarioLogado = await usuario.findByPk(usuarioExistente.id);
  try {
    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: usuarioLogado._id,
      },
      secret
    );

    return res
      .status(201)
      .json({ msg: "logado!", usuario: usuarioLogado, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error" });
  }
};

module.exports = logandoUsuarioController;
