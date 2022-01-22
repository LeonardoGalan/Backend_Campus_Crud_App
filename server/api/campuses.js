const router = require('express').Router()
const {Campus} = require('../database')

router.get('/', async (req, res) => {
  try {
    const campuses = await Campus.findAll()
    res.send(campuses)
  } catch (error) {
    res.send(error.message)
  }
})

router.get('/:id', async(req, res) => {
  try {
    const campus = await Campus.findByPk(req.params.id)
    res.send(campus)
  } catch (error) {
    res.send(error.message)
  }
}) 

router.post('/', async(req, res) => {
  try {
    const newCampus = await Campus.create(req.body)
    res.send('Campus added successfully!')
  } catch (error) {
    res.send(error.message)
  }
})
router.put('/:id', async(req, res) => {
  try {
    const campusToBeUpdated = await Campus.findByPk(req.params.id)
    await campusToBeUpdated.update(req.body)
    if(campusToBeUpdated.name !== req.body.name)res.send("There's already a campus with that name! Updated everything else..")
    else{res.send('Campus updated successfully!')}}
    catch (error) {
    res.send(error.message)
  }
})
router.delete('/:id', async(req, res) => {
  try {
    const campusToBeDestroyed = await Campus.findByPk(req.params.id)
    await campusToBeDestroyed.destroy()
    res.send('Campus removed successfully!')} 
    catch (error) {
    res.send(error.message)
  }
})

module.exports = router