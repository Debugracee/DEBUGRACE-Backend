const createTrilhas = async (req, res) => {
  const db = require("../../connection/db");
  const trilha = require("../../model/trilhas");
  await db.sync();
  const { titulo, descricao, conteudo } = req.body;
  const novaTrilha = await trilha.create({
    titulo,
    descricao,
    conteudo,
  });

  return res
    .status(201)
    .json({ trilha: novaTrilha, msg: "trilha criada com sucesso :)" });
};

module.exports = createTrilhas;
