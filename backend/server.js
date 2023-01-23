const express = require('express')
const connectionDb = require('./config/db')
const colors = require('colors');
const { errorHandler } = require("./middlewares/errorMiddleware")
const dotenv = require('dotenv').config()
const port = 3000;
connectionDb()
const app = express()
//Get Api
app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler);
app.listen(port, () => console.log(`Hey this is smad ul hassan {Port:${port}}`))