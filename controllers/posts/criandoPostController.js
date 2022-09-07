const criandoPostController = async (req, res) => {
    const db = require('../../connection/db');
    let post = require('../../model/posts');
    const { nome, conteudo } = req.body
    await db.sync();
    const novoPost = post.create({
        nome, conteudo
    });

    return res.json({ post: novoPost });
};

module.exports = criandoPostController;