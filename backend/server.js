const express = require('express')
const { errorHandler } = require("./middlewares/errorMiddleware")
const dotenv = require('dotenv').config()
const port = 3000;
const app = express()
//Get Api
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler);
app.listen(port, () => console.log(`Hey this is smad ul hassan {Port:${port}}`))