require("dotenv/config");
const Sequelize = require("sequelize");

// validação para saber em qual banco de dados a aplicação está conectada(bd de producao ou teste)
if (process.env.ENVIRONMENT === "debugrace") {
  console.log("debugrace_production");
  const sequelize = new Sequelize(process.env.DB_LINK, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
      native: true,
    },
  });
  module.exports = sequelize;
} else {
  console.log(process.env.ENVIRONMENT);
  const sequelize = new Sequelize(
    process.env.DATABASE_NAME_TESTE,
    process.env.DATABASE_USERNAME_TESTE,
    process.env.DATABASE_PASSWORD_TESTE,
    {
      dialect: 'mysql',
      host: process.env.DATABASE_HOST_TESTE,
      port: process.env.DATABASE_PORT_TESTE,
    }
  );

  module.exports = sequelize;
}

// }

//   module.exports = sequelize;
// }
