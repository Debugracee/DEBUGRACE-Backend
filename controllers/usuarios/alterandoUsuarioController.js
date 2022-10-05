const bcrypt = require("bcrypt");
const alterandoUsuarioController = async (req, res) => {
  let usuario = require("../../model/usuarios");
  const id = req.params.id;
  const { nome, email, nascimento, genero, senha } = req.body;
  const usuarioArmazenado = await usuario.findByPk(id);
  const senhaHash = await bcrypt.hash(senha, 8);

  // nao esquecer de fazer umas validacoes para nao dar problema com dados de outro usuario
  // cansativo ZZZZzzzzzzzzz
  await usuario.update(
    {
      nome: nome || usuarioArmazenado.nome,
      email: email || usuarioArmazenado.email,
      nascimento: nascimento || usuarioArmazenado.nascimento,
      genero: genero || usuarioArmazenado.genero,
      senha: senhaHash || usuarioArmazenado.senha,
    },
    { where: { id: id } }
  );

  const usuarioAlterado = await usuario.findByPk(id);
  return res.json({ usuarioAlterado: usuarioAlterado });
};

module.exports = alterandoUsuarioController;
