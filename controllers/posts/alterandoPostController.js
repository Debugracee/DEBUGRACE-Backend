const alterandoPostController = async (req, res) => {
    let post = require('../../model/posts');
    const id = req.params.id;
    const { nome, conteudo } = req.body;
    const postArmazenado = await findByPk(id);
    const postAlterado = await post.update({
        nome: nome || postArmazenado.nome,
        conteudo: conteudo || postArmazenado.conteudo
    }, {
        where: {
            id: id
        }
    }
    );


    return res.json({ postAlterado: postAlterado })
};

module.exports = alterandoPostController;