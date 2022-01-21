const Sequelize = require('sequelize')
const myDatabase = new Sequelize("postgres://postgres:123@localhost:5432/campusdb",{logging : false })

module.exports = myDatabase
