const Sequelize = require('sequelize');
const sequelize = require('../connection/db');
const db = require('../connection/db');

const Usuario = db.define('usuarios', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.DataTypes.STRING(90),
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING(90),
        allowNull: false
    },
    nascimento: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    genero: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },
    senha: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    }

});

module.exports = Usuario;
