const Sequelize = require('sequelize')
const myDatabase = require('../database')
// const Campus = require('./campuses')



const Student = myDatabase.define('students', {
  studentId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    validate: {
        notEmpty: true
    },
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
        notEmpty: true,
        isEmail: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
        min: 0.0,
        max: 4.0
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png",
    validate: {
        isUrl: true
    }
  }
})

// Student.belongsTo(Campus);

// Student.sync({alter: true}).then(() => {
//   //tables created
//    Student.bulkCreate([
//      {
//        studentId: 5,
//            firstName: "john",
//            lastName: "doe",
//            email: "john@gmail.com",
//            gpa: 3.2,
//      },
//      {
//        studentId: 2,
//            firstName: "john",
//            lastName: "doe",
//            email: "john@gmail.com",
//            gpa: 3.2,
//      },
//      {
//        studentId: 3,
//            firstName: "john",
//            lastName: "doe",
//            email: "john@gmail.com",
//            gpa: 3.2,
//      },
//      {
//        studentId: 4,
//            firstName: "john",
//            lastName: "doe",
//            email: "john@gmail.com",
//            gpa: 3.2,
//      },
//    ])
//   }).catch((err) => {
//        console.log(err.message);
//      })

    
module.exports = Student
