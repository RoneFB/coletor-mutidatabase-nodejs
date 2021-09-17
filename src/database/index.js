const Sequelize = require('sequelize');
const dbConfigSqlServer = require('../config/sqlserver');
const dbConfigSqlLite = require('../config/sqlLite');

const connSQLServer = new Sequelize(dbConfigSqlServer)
try {
    connSQLLite.authenticate();
    console.log('Conectou com o SQL Server');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
const connSQLLite = new Sequelize(dbConfigSqlLite)
try {
    connSQLLite.authenticate();
    console.log('Conectou com o SQL Lite');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

require('../model/Carga').init(connSQLLite);
require('../model/Cura').init(connSQLServer);

module.exports =  connSQLLite;
module.exports =  connSQLServer;