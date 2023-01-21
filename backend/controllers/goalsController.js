const asyncHandler = require('express-async-handler')
//@Desc getGoals
//router: Get  /api/goals
const getGoals = asyncHandler(async (req, res) => {
    res.json({ message: "You are getting goals " })
})
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.value) {
        res.json({ message: 'please Enter Text Here!!!!!!' })
    }

    res.status(200).json({ message: "You are setting goals" })

})
const updateGoals = asyncHandler(async (req, res) => {
    res.json({ message: "You are updating  goals" })
})
const deleteGoals = asyncHandler(async (req, res) => {
    res.json({ message: "You are deleting  goals" })
})
module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}