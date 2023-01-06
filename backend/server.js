const express = require('express')
const dotenv = require('dotenv').config()
const port = 3000;
const app = express()
//Get Api
app.use('/api/goals', require('./routes/goalRoutes'))


app.listen(port, () => console.log(`Hey this is smad ul hassan {Port:${port}}`))