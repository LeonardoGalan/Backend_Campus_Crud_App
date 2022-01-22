// //const Sequelize = require('sequelize')
// const myDatabase = require('../database')
// const Student = require('./students')
// const Campus = require('./campuses')



// Campus.hasMany(Student);
// Student.belongsTo(Campus);


// myDatabase.sync({alter: true}).then(() => {
//  //tables created
//   Student.bulkCreate([
//     {
//       studentId: 1,
//           firstName: "john",
//           lastName: "doe",
//           email: "john@gmail.com",
//           gpa: 3.2,
//     },
//     {
//       studentId: 2,
//           firstName: "john",
//           lastName: "doe",
//           email: "john@gmail.com",
//           gpa: 3.2,
//     },
//     {
//       studentId: 3,
//           firstName: "john",
//           lastName: "doe",
//           email: "john@gmail.com",
//           gpa: 3.2,
//     },
//     {
//       studentId: 4,
//           firstName: "john",
//           lastName: "doe",
//           email: "john@gmail.com",
//           gpa: 3.2,
//     },
//   ])

//   Campus.bulkCreate([
//     {
//     name: "College1",
//     address: "Someplace",
//     description: "text goes here",


//   },
//   {
//     name: "Brooklyn College",
//     address: "Someplace",
//     description: "text goes here",


//   },
//   {
//     name: "Hunter College",
//     address: "Someplace",
//     description: "text goes here",


//   },
//   {
//     name: "NYU",
//     address: "Someplace",
//     description: "text goes here",


//   }



//   ])
 
// }).catch((err) => {
//     console.log(err.message);
// })

// module.exports = myDatabase