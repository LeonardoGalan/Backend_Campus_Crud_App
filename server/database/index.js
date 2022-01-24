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
        studentId :"gEsaPKtrI_VH-G3k80Ara",
        firstName:"John",
        lastName:"Doe",
        email:"john@gmail.com",
        campusName:"College1",
        gpa: 3.7
      },
      {
        studentId :"OPoLE8tnywRJy3_ko1a85",
        firstName:"Jane",
        lastName:"Doe",
        email:"jane@gmail.com",
        campusName:"College1",
        gpa: 3.9
      },
      {
        studentId :"Z22JiyT91TfOMPRPAF6pT",
        firstName:"First",
        lastName:"Lastman",
        email:"fl@gmail.com",
        campusName:"College2",
        gpa: 3.3
      },
      {
        studentId :"0q7ovBn20gCvOzwsdKJps",
        firstName:"Last",
        lastName:"Firstman",
        email:"lf@gmail.com",
        campusName:"College2",
        gpa: 3.3
      },
      {
        studentId :"nyEZgl2ge788DIph9BWms",
        firstName:"Iron",
        lastName:"Man",
        email:"stark@gmail.com",
        campusName:"College3",
        gpa: 4
      },
      {
        studentId :"5rY_S3n3eKodmc5hVB9j5",
        firstName:"Human",
        lastName:"Person",
        email:"definitelyarealperson@gmail.com",
        campusName:"College1",
        gpa: 3.2
      },
      {
        studentId :"aAO2eg7h7AO9w4thjVeEB",
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