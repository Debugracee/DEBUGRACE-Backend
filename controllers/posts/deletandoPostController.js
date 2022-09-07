const deletandoPostController = async (req, res) => {
    let post = require('../../model/posts');
    const id = req.params.id;
    const postDeletado = await post.destroy({
        where: {
            id: id
        }
    });

    return res.json({ postDeletado: postDeletado })
};

module.exports = deletandoPostController;