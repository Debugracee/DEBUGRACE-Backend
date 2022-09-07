const pegandoPostController = async (req, res) => {
    let post = require('../../model/posts');
    const posts = await post.findAll();
    return res.json({ posts: posts });
};

module.exports = pegandoPostController;