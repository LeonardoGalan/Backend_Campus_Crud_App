const Sequelize = require('sequelize')
const myDatabase = require('../database')
const Student = require('./models/students')
const Campus = require('./models/campuses')


// myDatabase.sync({alter: true}).then(() => {

const seedDatabase = async () => {

    await Promise.all([
        Campus.create({
        
        name: "College1",
        address: "Someplace",
        description: "text goes here"}),
    
        Campus.create({
            name: "College2",
            address: "Someplace",
            description: "text goes here"}),
    
    
        Campus.create({
                name: "College4",
                address: "Someplace",
                description: "text goes here"}),
        Campus.create({

                    name: "College5",
                    address: "Someplace",
                    description: "text goes here"}),
                
    
    Student.create({
      studentId: 1,
          firstName: "john",
          lastName: "doe",
          email: "john@gmail.com",
          gpa: 3.2,
    },
    Student.create({

       studentId: 2,
          firstName: "john",
          lastName: "doe",
          email: "john@gmail.com",
          gpa: 3.2,
    }),

     Student.create({

       studentId: 3,
          firstName: "john",
          lastName: "doe",
          email: "john@gmail.com",
          gpa: 3.2,
    }),
     Student.create({

       studentId: 4,
          firstName: "john",
          lastName: "doe",
          email: "john@gmail.com",
          gpa: 3.2,
    })
    
    
    )])}

module.exports = seedDatabase;
        //tables created
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

