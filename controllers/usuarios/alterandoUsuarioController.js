const bcrypt = require("bcrypt");
const alterandoUsuarioController = async (req, res) => {
  let usuario = require("../../model/usuarios");
  const id = req.params.id;
  const { nome, email, senha } = req.body;
  const usuarioArmazenado = await usuario.findByPk(id);
  let senhaHash = null;
  // nao esquecer de fazer umas validacoes para nao dar problema com dados de outro usuario
  // const usuarioExistente = await usuario.findOne({ where: { email: email } });
 if(senha){
   senhaHash = await bcrypt.hash(senha, 8);
 }
  
  await usuario.update(
    {
      nome: nome || usuarioArmazenado.nome,
      email: email || usuarioArmazenado.email,
      senha: (senhaHash === null) ? usuarioArmazenado.senha : senhaHash
    },
    { where: { id: id } }
  );

  const usuarioAlterado = await usuario.findByPk(id);

  try {
    return res.json({ usuarioAlterado: usuarioAlterado, msg: 'Suas alterações foram feitas com sucesso' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Não foi possível completar esta ação - Serve ERROR" });
  }
  
};

module.exports = alterandoUsuarioController;
