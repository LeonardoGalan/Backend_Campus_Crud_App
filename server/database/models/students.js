const Sequelize = require('sequelize')
const myDatabase = require('../database')

const Student = myDatabase.define('students', {
  studentId: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    validate: {
        notEmpty: true
    }
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
    unique: true,
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

module.exports = Student


