const Sequelize = require('sequelize')
console.log(process.env.DATABASE_USERNAME_TESTE)

// validação para saber em qual banco de dados a aplicação está conectada(bd de producao ou teste)
if (process.env.ENVIRONMENT === 'debugrace') {
    console.log('debugrace_production')
    const sequelize = new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DATABASE_USERNAME,
        process.env.DATABASE_PASSWORD,
        {
            dialect: "mysql",
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT
        }
    )

    module.exports = sequelize;

} else {
    console.log("debugrace_stating")
    const sequelize = new Sequelize(
        process.env.DATABASE_NAME_TESTE,
        process.env.DATABASE_USERNAME_TESTE,
        process.env.DATABASE_PASSWORD_TESTE,

        {
            dialect: "mysql",
            host: process.env.DATABASE_HOST_TESTE,
            port: process.env.DATABASE_PORT_TESTE
        });
        
    module.exports = sequelize;
};
