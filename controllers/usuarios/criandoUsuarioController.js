const bcrypt = require("bcrypt");
const criandoUsuarioController = async (req, res) => {
  const db = require("../../connection/db");
  const usuario = require("../../model/usuarios");
  await db.sync();
  const { nome, email, senha } = req.body;
  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
  if (!nome) {
    return res.status(422).json({ erro: "É preciso de um nome" });
  }

  if (!email) {
    return res.status(422).json({ erro: "É preciso de um email" });
  } else if (!checkEmail(email)) {
    return res.status(422).json({ erro: "O email precisa ser válido" });
  }

  if (!senha) {
    return res.status(422).json({ erro: "É preciso de uma senha" });
  } else if (senha.length < 8) {
    return res
      .status(422)
      .json({ erro: "Sua senha precisa conter mais de 8 caracteres" });
  }

  // const salt = await bcrypt.genSalt();
  const senhaHash = await bcrypt.hash(senha, 8);
  // console.log(senhaHash)

  const usuarioExistente = await usuario.findOne({ where: { email: email } });

  if (usuarioExistente) {
    return res
      .status(422)
      .json({ erro: "Esse email ja está sendo usado" });
  }

  const novoUsuario = await usuario.create({
    nome,
    email,
    senha: senhaHash,
  });

  try {
    return res
      .status(201)
      .json({ usuario: novoUsuario, msg: "Suas informações foram cadastradas" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error" });
  }
};

module.exports = criandoUsuarioController;
