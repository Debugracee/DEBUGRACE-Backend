const getTrilhas = async(req, res) => {
    let trilha = require("../../model/trilhas");
    const trilhas = await trilha.findAll();
    return res.status(201).json({trilhas: trilhas})
};

module.exports = getTrilhas;