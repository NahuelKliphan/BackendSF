import Sequelize from 'sequelize';

// new Sequelize(basededatos, usuario, contrasena, sequelizeConfig)
// sequelizeConfig
// dialect -> tipo de base de datos a usar
// host -> servidor donde esta ubicada la base de datos
const database = new Sequelize(
  "facturacion", "postgres", "postgres",
  {
    dialect: 'postgres',
    host: 'localhost'
  }
);

export default database;