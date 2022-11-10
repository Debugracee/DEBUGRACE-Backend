require("dotenv/config");
const Sequelize = require("sequelize");

// validação para saber em qual banco de dados a aplicação está conectada(bd de producao ou teste)
// if (process.env.ENVIRONMENT === "debugrace") {
//   console.log("debugrace_production");
//   const sequelize = new Sequelize(
//     process.env.DATABASE_NAME,
//     process.env.DATABASE_USERNAME,
//     process.env.DATABASE_PASSWORD,
//     {
//       dialect: "postgres",
//       host: process.env.DATABASE_HOST,
//       port: process.env.DATABASE_PORT,
//       protocol: "postgres",
//       dialectOptions: {
//         ssl: true,
//         native: true,
//       },
//     }
//   );

//   module.exports = sequelize;
// } else {
//   console.log("debugrace_stating");
//   const sequelize = new Sequelize(
//     process.env.DATABASE_NAME_TESTE,
//     process.env.DATABASE_USERNAME_TESTE,
//     process.env.DATABASE_PASSWORD_TESTE,
//     {
//       dialect: "postgres",
//       host: process.env.DATABASE_HOST_TESTE,
//       port: process.env.DATABASE_PORT_TESTE,
//       protocol: "postgres",
//       dialectOptions: {
//         ssl: true,
//         native: true,
//       },
//     }
//   );

//   module.exports = sequelize;
// }

const sequelize = new Sequelize(
  process.env.DB_LINK,
  {
    dialect: "postgres",
    // host: process.env.DATABASE_HOST,
    // port: process.env.DATABASE_PORT,
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        // Ref.: https://github.com/brianc/node-postgres/issues/2009
        rejectUnauthorized: false,
      },
      ssl: true,
      native: true,
    } 
  })

  module.exports = sequelize;
