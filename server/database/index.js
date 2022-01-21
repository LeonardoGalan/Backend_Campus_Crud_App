//const Sequelize = require('sequelize')

const myDatabase = require('./database')
const Student = require('./models/students')
const Campus = require('./models/campuses')

//Campus.hasMany(Student,{as: 'students' foreign-key: 'campus'})
async function createDummies(){
  try {
    if(!await Campus.findByPk("College1") && (!await Student.findByPk("1"))) {
    
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

  Student.create({
    "studentId": "1",
    "firstName": "john",
    "lastName": "doe",
    "gpa": 3.0,
    "email": "john@gmail.com"
  })

  Student.create({
    "studentId": "2",
    "firstName": "jane",
    "lastName": "doe",
    "gpa": 2.0,
    "email": "jane@gmail.com"
  })

  Student.create({
    "studentId": "3",
    "firstName": "rex",
    "lastName": "tea",
    "gpa": 1.0,
    "email": "rex324@gmail.com"
  })

  Student.create({
    "studentId": "4",
    "firstName": "hank",
    "lastName": "hill",
    "gpa": 4.0,
    "email": "hank3033@gmail.com"
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