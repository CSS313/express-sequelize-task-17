const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'priyatan@3009', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;