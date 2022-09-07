const criandoUsuarioController = async (req, res) => {
  const db = require("../../connection/db");
  const usuario = require("../../model/usuarios");
  const { nome, email, nascimento, genero, senha } = req.body;
  await db.sync();
  const novoUsuario = await usuario.create({
    nome,
    email,
    nascimento,
    genero,
    senha,
  });

  return res.status(201).json({ usuario: novoUsuario });
};

module.exports = criandoUsuarioController;
