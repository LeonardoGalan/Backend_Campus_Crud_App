const Sequelize = require('sequelize')

const myDatabase = require('./database')
const Student = require('./models/students')
const Campus = require('./models/campuses')

Campus.hasMany(Student,{as: 'students', foreignKey:{name:'campusName',allowNull:true},sourceKey:'name'})

async function createDummies(){
  try {
    if(!await Campus.findByPk(1) && !await Student.findByPk(1)) {
    
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
    firstName: "john",
    lastName: "doe",
    email: "john@gmail.com",
    gpa: 3.2
  })
  await Student.create({
    firstName: "jane",
    lastName: "doe",
    campusName: "College1",
    email: "jane@gmail.com",
    gpa: 2.3
  })
  await Student.create({
    firstName: "rex",
    lastName: "lastname",
    campusName: "College1",
    email: "rex@gmail.com",
    gpa: 1.2
  })
  await Student.create({
    firstName: "hank",
    lastName: "hill",
    campusName: "College1",
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