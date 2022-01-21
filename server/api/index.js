const Router = require('express').Router()

Router.use('/students', require('./students'))
Router.use('/campuses', require('./campuses'))
Router.get('/', async(req,res)=>{
    try {await res.send("Welcome to the API level!")}
    catch(error){res.send(error.message)}
})
module.exports = Router