const Sequelize = require('sequelize');
const sequelize = require('../connection/db');
const db = require('../connection/db');

const Posts = db.define('posts', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    nome: {
        type: Sequelize.DataTypes.STRING(45),
        allowNull: false
    },

    conteudo: {
        type: Sequelize.DataTypes.TEXT('long'),
        allowNull: false
    }
});

module.exports = Posts;