const Sequelize = require('sequelize')
const myDatabase = require('../database')

const Campus = myDatabase.define('campuses', {
  campusId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
        notEmpty: true
    }
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png",
    validate: {
        isUrl: true
    }
  }
})

module.exports = Campus
