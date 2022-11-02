const bcrypt = require("bcrypt");
const alterandoUsuarioController = async (req, res) => {
  let usuario = require("../../model/usuarios");
  const id = req.params.id;
  const { nome, email, senha } = req.body;
  const usuarioArmazenado = await usuario.findByPk(id);

  // nao esquecer de fazer umas validacoes para nao dar problema com dados de outro usuario
  // const usuarioExistente = await usuario.findOne({ where: { email: email } });

  const senhaHash = await bcrypt.hash(senha, 8);
  await usuario.update(
    {
      nome: nome || usuarioArmazenado.nome,
      email: email || usuarioArmazenado.email,
      senha: senhaHash || usuarioArmazenado.senha
    },
    { where: { id: id } }
  );

  const usuarioAlterado = await usuario.findByPk(id);
  return res.json({ usuarioAlterado: usuarioAlterado });
};

module.exports = alterandoUsuarioController;
