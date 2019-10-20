const Sequelize = require('sequelize');

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOSTNAME,
    DB_PORT,
    DB_NAME,    
} = process.env

// Option 1: Passing parameters separately
 const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOSTNAME,
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  port: DB_PORT,
  
  pool: {
    max: 5,
    min: 0,
    idle: 20000
  },
});

module.exports= {
    sequelize
}


// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');