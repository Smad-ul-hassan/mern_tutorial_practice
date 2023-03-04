const express = require('express')
const connectionDb = require('./config/db')
const colors = require('colors');
// const { errorHandler } = require("./middlewares/errorMiddleware")
const dotenv = require('dotenv').config()
const port = 3000;
connectionDb()
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Get Api
app.post('/book', (req, res) => {
    const book = req.body;
    // Output the book to the console for debugging
    console.log(book);

    res.send('Book is added to the database');
});
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/Users', require('./routes/userRoutes'))


// app.use(errorHandler);
app.listen(port, () => console.log(`Hey this is smad ul hassan {Port:${port}}`))