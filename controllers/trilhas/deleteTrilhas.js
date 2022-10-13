const deleteTrilhas = async (req, res) => {
  let trilha = require("../../model/trilhas");
  const id = req.params.id;
  const trilhas = await trilha.findByPk(id);
  const deleteTrilha = await trilha.destroy({
    where: {
      id: id,
    },
  });

  return res.json({ msg: "trilha deletada", trilhaDeletada: trilhas });
};

module.exports = deleteTrilhas;
