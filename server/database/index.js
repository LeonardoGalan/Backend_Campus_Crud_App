const Sequelize = require('sequelize')

const myDatabase = require('./database')
const Student = require('./models/students')
const Campus = require('./models/campuses')

Campus.hasMany(Student,{as: 'students', foreignKey:{name:'campusName',allowNull:true},sourceKey:'name'})

async function createDummyData(){
  if(!await Campus.findOne() && !await Student.findOne())
  {await Campus.bulkCreate(
    [
      {
      name:"College1",
      address:"Somewhere",
      description:"TEXT HERE"
      },
      {
        name:"College2",
        address:"Anywhere",
        description:"TEXT HERE"
      },
      {
        name:"College3",
        address:"Nowhere",
        description:"TEXT HERE"
      }])
    await Student.bulkCreate(
    [
      {
        firstName:"John",
        lastName:"Doe",
        email:"john@gmail.com",
        campusName:"College1",
        gpa: 3.7
      },
      {
        firstName:"Jane",
        lastName:"Doe",
        email:"jane@gmail.com",
        campusName:"College1",
        gpa: 3.9
      },
      {
        firstName:"First",
        lastName:"Lastman",
        email:"fl@gmail.com",
        campusName:"College2",
        gpa: 3.3
      },
      {
        firstName:"Last",
        lastName:"Firstman",
        email:"lf@gmail.com",
        campusName:"College2",
        gpa: 3.3
      },
      {
        firstName:"Iron",
        lastName:"Man",
        email:"stark@gmail.com",
        campusName:"College3",
        gpa: 4
      },
      {
        firstName:"Human",
        lastName:"Person",
        email:"definitelyarealperson@gmail.com",
        campusName:"College1",
        gpa: 3.2
      },
      {
        firstName:"Hank",
        lastName:"Hill",
        email:"hank@gmail.com",
        gpa: 3.4
      }])
    }
}

module.exports = {
    myDatabase,
    Student,
    Campus,
    createDummyData
}