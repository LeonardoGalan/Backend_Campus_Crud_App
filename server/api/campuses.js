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

router.get('/:name', async(req, res) => {
  try {
    const campus = await Campus.findOne({where:{name:req.params.name}})
    res.send(campus)
  } catch (error) {
    res.send(error.message)
  }
}) 
router.get('/:name/students', async(req, res) => {
  try {
    const campus = await Campus.findOne({where:{name:req.params.name}})
    res.send(await campus.getStudents())
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
router.put('/:name', async(req, res) => {
  try {
    const campusToBeUpdated = await Campus.findOne({where:{name:req.params.name}})
      await campusToBeUpdated.update(req.body)
      res.send('Campus updated successfully!')
    }
    catch (error) {
    res.send(error.message)
  }
})
router.delete('/:name', async(req, res) => {
  try {
    const campusToBeDestroyed = await Campus.findOne({where:{name:req.params.name}})
    await campusToBeDestroyed.destroy()
    res.send('Campus removed successfully!')} 
    catch (error) {
    res.send(error.message)
  }
})

module.exports = router