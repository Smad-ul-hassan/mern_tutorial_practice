const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // res.send("Hey this is my first Api")
    res.json({ message: "Get goals" })
})
router.post('/', (req, res) => {
    // res.send("Hey this is my first Api")
    res.json({ message: "Set goals" })
})
router.put('/:id', (req, res) => {
    // res.send("Hey this is my first Api")
    res.json({ message: ` Update goals for ${req.params.id}` })
})
router.delete('/:id', (req, res) => {
    // res.send("Hey this is my first Api")
    res.json({ message: ` Delete goals for ${req.params.id}` })
})
module.exports = router