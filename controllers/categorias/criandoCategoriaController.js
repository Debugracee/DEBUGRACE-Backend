const criandoCategoriaController = async (req, res) => {
    const db = require('../../connection/db');
    const categoria = require('../../model/categorias');
    const {nome} = req.body
    await db.sync()
    const novaCategoria = await categoria.create({
        nome
    })

    return res.json({novaCategoria: novaCategoria})
}