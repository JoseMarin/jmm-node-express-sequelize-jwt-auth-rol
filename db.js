const {Sequelize, DataTypes} = require('sequelize');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE, 
    process.env.MYSQL_USER, 
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT || '3306',
        dialect: 'mysql',
        operatorAliases: false,
        pool: {
            max: 5,  //maximum number of connection in pool
            min: 0,  //minimum number of connection in pool
            acquire: 30000, //maximum time, in milliseconds, that a connection can be idle before being released
            idle: 10000 // maximum time, in milliseconds, that pool will try to get connection before throwing error
        },
    }
);

module.exports = sequelize.authenticate()
.then((db)=>{
    console.log('MYSQL connected'); 
    return db;
});