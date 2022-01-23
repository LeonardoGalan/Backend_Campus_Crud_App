const Sequelize = require('sequelize')



// const myDatabase = new Sequelize("postgres://postgres:123@localhost:5432/campusdb",{logging : false})
//You have to create a database on PSQL named 'campusdb' 
//and set the password field to whatever your password is
const myDatabase = new Sequelize(
  process.env.DATABASE_URL || "postgres://postgres:123@localhost:5432/campusdb",
  {
    //   host: "xxxxxx.eu-west-1.compute.amazonaws.com",
    //  dialect: 'postgres',
    ssl: "postgres://postgres:123@localhost:5432/campusdb" ? true : false,
    // ssl: true,
    // protocol: 'postgres',
    logging: false,
    //  dialectOptions: {
    //       ssl:{
    //         require: true,
    //        rejectUnauthorized: false, // <<<<<< YOU NEED THIS
    //      },
    //     },
  }
);

module.exports = myDatabase
