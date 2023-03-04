const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");
const asyncHandler = require("express-async-handler");
// Register a new user*****
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Add All Fields");
    }
    const checkUser = await User.findOne({ email });
    if (checkUser) {
        res.status(400);
        throw new Error("User already exists");
    }
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(400).Error("Invalid user data");
    }
});
// Login user
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const findUser = await User.findOne({ email })
    if (findUser && await bcrypt.compare(password, findUser.password)) {
        res.status(201).json({
            _id: findUser.id,
            name: findUser.name,
            email: findUser.email,
            token: generateToken(user._id)

        })
    }
    else {
        res.status(400)
        throw new Error("Invalid Data Given, No User exist")
    }
});
const getMe = (req, res) => {
    res.json({ message: "Hello this is me User" });
};
// Create a JWT Token
const generateToken = (id) => {
    jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}
const creatToken =
    module.exports = {
        registerUser,
        loginUser,
        getMe,
    };
