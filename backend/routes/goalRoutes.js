const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalsController')



// router.post('/', (req, res) => {
//     // res.send("Hey this is my first Api")
//     res.json({ message: "Set goals" })
// })
// router.put('/:id', (req, res) => {
//     // res.send("Hey this is my first Api")
//     res.json({ message: ` Update goals for ${req.params.id}` })
// })
// router.delete('/:id', (req, res) => {
//     // res.send("Hey this is my first Api")
//     res.json({ message: ` Delete goals for ${req.params.id}` })
// })
// module.exports = router

//router.get('/', getGoals)
//router.post('/', setGoals)
//you can also write above 2 lines like this if both the requests are same
router.route('/').get(getGoals)
router.post("/", setGoals)
router.put('/:id', updateGoals)
router.delete('/:id', deleteGoals)
module.exports = router