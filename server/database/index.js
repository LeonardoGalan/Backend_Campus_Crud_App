//const Sequelize = require('sequelize')

const myDatabase = require('./database')
const Student = require('./models/students')
const Campus = require('./models/campuses')

//Campus.hasMany(Student,{as: 'students' foreign-key: 'campus'})


module.exports = {
    myDatabase,
    Student,
    Campus
}