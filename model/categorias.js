const Sequelize = require('sequelize');
const sequelize = require('../connection/db');
const db = require('../connection/db');

const Categoria = db.define('categorias', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Categoria;