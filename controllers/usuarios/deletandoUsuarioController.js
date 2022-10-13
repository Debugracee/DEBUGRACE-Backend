const deletandoUsuarioController =  async(req, res) => {
    let usuario = require('../../model/usuarios');
    const id = req.params.id
    const usuarios = await usuario.findByPk(id);
    const usuarioExcluido = await usuarios.destroy({
        where: {
            id: id
        }
    })

    return res.json({usuarioExcluido: usuarioExcluido})
};

module.exports = deletandoUsuarioController;