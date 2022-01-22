const Sequelize = require('sequelize')
const myDatabase = require('../database')
// const Student = require('./campuses')

const Campus = myDatabase.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
    },
    primaryKey: true
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

// Campus.hasMany(Student);

// Campus.sync({alter: true}).then(() => {
// Campus.bulkCreate([
//       {
//       name: "College1",
//       address: "Someplace",
//       description: "text goes here",
  
  
//     },
//     {
//       name: "Brooklyn College", 
//       address: "Someplace",
//       description: "text goes here",
  
  
//     },
//     {
//       name: "Hunter College",
//       address: "Someplace",
//       description: "text goes here",
  
  
//     },
//     {
//       name: "NYU",
//       address: "Someplace",
//       description: "text goes here",
  
//     }
// ])
//   }).catch((err) => {
//          console.log(err.message);
//      })

