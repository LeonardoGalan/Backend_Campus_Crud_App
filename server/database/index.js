//const Sequelize = require('sequelize')

const myDatabase = require('./database')
const Student = require('./models/students')
const Campus = require('./models/campuses')

//Campus.hasMany(Student,{as: 'students' foreign-key: 'campus'})



async function createDummies(){
  try {
    if(!await Campus.findByPk("College1") && !await Student.findByPk(1)) {
    
  await Campus.create({
    name: "College1",
    address: "Someplace",
    description: "text goes here"
  })
  await Campus.create({
    name: "College2",
    address: "Someplace",
    description: "text goes here"
  })
  await Campus.create({
    name: "College3",
    address: "Someplace",
    description: "text goes here"
  })
  await Campus.create({
    name: "College4",
    address: "Someplace",
    description: "text goes here"
  })
  await Student.create({
    studentId: 1,
    firstName: "john",
    lastName: "doe",
    email: "john@gmail.com",
    gpa: 3.2
  })
  await Student.create({
    studentId: 2,
    firstName: "jane",
    lastName: "doe",
    email: "jane@gmail.com",
    gpa: 2.3
  })
  await Student.create({
    studentId: 3,
    firstName: "rex",
    lastName: "lastname",
    email: "rex@gmail.com",
    gpa: 1.2
  })
  await Student.create({
    studentId: 4,
    studentId: 4,
    firstName: "hank",
    lastName: "hill",
    email: "hank@gmail.com",
    gpa: 4.0
  })
}
}
catch (err){
  console.log(`${err.message}\nRun the server again!`);
}
}

createDummies()


module.exports = {
    myDatabase,
    Student,
    Campus
}