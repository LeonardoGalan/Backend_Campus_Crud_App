const router = require('express').Router()
const {Student} = require('../database')

router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    res.send(error.message)
  }
})
router.get('/notenrolled', async (req, res) => {
  try {
    const students = await Student.findAll({where:{campusName:null}})
    res.send(students)
  } catch (error) {
    res.send(error.message)
  }
})
router.get('/:id', async(req, res) => {
  try {
    const student = await Student.findByPk(req.params.id)
    res.send(student)
  } catch (error) {
    res.send(error.message)
  }
}) 

router.post('/', async(req, res) => {
  try {
    const newStudent = await Student.create(req.body)
    res.send('Student added successfully!')
  } catch (error) {
    res.send(error.message)
  }
})
router.put('/:id', async(req, res) => {
  try {
    const studentToBeUpdated = await Student.findByPk(req.params.id)
      await studentToBeUpdated.update(req.body)
      res.send('Student updated successfully!')
    }
    catch (error) {
    res.send(error.message)
  }
})
router.delete('/:id', async(req, res) => {
  try {
    const studentToBeDestroyed = await Student.findByPk(req.params.id)
    await studentToBeDestroyed.destroy()
    res.send('Student removed successfully!')} 
    catch (error) {
    res.send(error.message)
  }
}) 

module.exports = router