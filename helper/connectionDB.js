const { Sequelize } = require('sequelize');

const connect = new Sequelize('user', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = {
    connect,
}