const putTrilha = async (req, res) => {
  let trilhas = require("../../model/trilhas");
  const id = req.params.id;
  const { trilha, conteudo, descConteudo, linkConteudo } = req.body;
  const trilhaCadastrada = await trilhas.findByPk(id);
  await trilhas.update(
    {
      trilha: trilha || trilhaCadastrada.trilha,
      conteudo: conteudo || trilhaCadastrada.conteudo,
      descConteudo: descConteudo || trilhaCadastrada.descConteudo,
      linkConteudo: linkConteudo || trilhaCadastrada.linkConteudo,
    },
    { where: { id: id } }
  );

  const trilhaAtualizada = await trilhas.findByPk(id);
  return res.json({ trilhaAtualizada: trilhaAtualizada });
};

module.exports = putTrilha;
