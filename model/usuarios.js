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
    senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    statusLogin: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }

});

module.exports = Usuario;
