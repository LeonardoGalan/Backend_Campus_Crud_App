//const Sequelize = require('sequelize')

const myDatabase = require('./database')
const Student = require('./models/students')
const Campus = require('./models/campuses')

//Campus.hasMany(Student,{as: 'students' foreign-key: 'campus'})
async function createDummies(){
  try {
    if(!await Campus.findByPk("College1"))
{
    Campus.create({
    "name": "College1",
    "address": "Someplace",
    "description": "text goes here"
  })
    Campus.create({
    "name": "College2",
    "address": "Someplace",
    "description": "text goes here"
  })
    Campus.create({
    "name": "College3",
    "address": "Someplace",
    "description": "text goes here"
  })
    Campus.create({
    "name": "College4",
    "address": "Someplace",
    "description": "text goes here"
  })
}
  }
catch (err){
  console.log(err.message);
}
}


createDummies()


module.exports = {
    myDatabase,
    Student,
    Campus
}