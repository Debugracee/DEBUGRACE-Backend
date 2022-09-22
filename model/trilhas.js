const Sequelize = require('sequelize');
const sequelize = require('../connection/db');
const db = require('../connection/db');

const Trilhas = db.define('trilhas', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    titulo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: Sequelize.DataTypes.TEXT('long'),
        allowNull: false
    },

    conteudo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Trilhas;