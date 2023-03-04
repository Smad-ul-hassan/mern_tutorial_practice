const asyncHandler = require("express-async-handler");
const Goal = require("../Model/goalModel.js");
//@Desc getGoals
//router: Get  /api/goals
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json({ message: "You are getting goals ", data: goals });
});

const setGoals = async (req, res) => {
    const goal = await Goal.create({
        text: req.body.text,
    });
    res.status(200).json({ message: "You are Setting goals", Goals: goal });
};

// const goal = await Goal.create({
//     text: req.body.text
// })
// res.status(200).json({ message: "You are Setting goals", data: goal })

const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedGoal);
});
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }
    const deleteGoals = await Goal.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteGoals);
});
module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
};
