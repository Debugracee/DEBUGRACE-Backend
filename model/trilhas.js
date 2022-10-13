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

    trilha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    conteudo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    descConteudo: {
        type: Sequelize.DataTypes.TEXT('long'),
        allowNull: false
    },

    pdfConteudo: {
        type: Sequelize.DataTypes.TEXT('long'),
        allowNull: false
    }
});

module.exports = Trilhas;