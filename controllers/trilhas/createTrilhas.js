const createTrilhas = async (req, res) => {
  const db = require("../../connection/db");
  const trilhas = require("../../model/trilhas");
  await db.sync();
  const { trilha, conteudo, descConteudo, linkConteudo } = req.body;
  const novaTrilha = await trilhas.create({
    trilha,
    conteudo,
    descConteudo,
    linkConteudo,
  });

  return res
    .status(201)
    .json({ trilha: novaTrilha, msg: "trilha criada com sucesso :)" });
};

module.exports = createTrilhas;
