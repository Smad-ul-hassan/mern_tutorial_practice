//@Desc getGoals
//router: Get  /api/goals
const getGoals = (req, res) => {
    res.json({ message: "You are getting goals " })
}
const setGoals = (req, res) => {
    res.json({ message: "You are setting goals" })
}
const updateGoals = (req, res) => {
    res.json({ message: "You are updating  goals" })
}
const deleteGoals = (req, res) => {
    res.json({ message: "You are deleting  goals" })
}
module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}