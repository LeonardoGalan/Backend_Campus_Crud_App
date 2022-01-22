const Sequelize = require('sequelize')
const myDatabase = new Sequelize(process.env.API_HOST || "postgres://postgres:123@localhost:5432/campusdb",{logging : false })
//You have to create a database on PSQL named 'campusdb' 
//and set the password field to whatever your password is


module.exports = myDatabase
