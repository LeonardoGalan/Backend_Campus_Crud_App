const Router = require('express').Router()

Router.use('/students', require('./students'))
Router.use('/', require('./campuses'))
Router.get('/', (req,res)=>{
    try {res.send("Welcome to the API level!")}
    catch(error){res.send(error.message)}
})

module.exports = Router