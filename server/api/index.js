const Router = require('express').Router()

Router.use('/students', require('./students'))
Router.use('/campuses', require('./campuses'))

module.exports = Router